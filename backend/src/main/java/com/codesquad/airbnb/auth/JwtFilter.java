package com.codesquad.airbnb.auth;

import static org.springframework.web.util.WebUtils.getCookie;

import com.codesquad.airbnb.auth.domain.UserDetail;
import com.codesquad.airbnb.core.member.Member;
import com.codesquad.airbnb.core.member.MemberRepository;
import com.codesquad.airbnb.exception.ErrorCode;
import com.codesquad.airbnb.exception.ErrorResponse;
import com.codesquad.airbnb.exception.unchecked.NotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtFilter implements Filter {

    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer ";
    private static final String MEMBER_ID = "member_id";

    private final ObjectFactory<UserDetail> userDetailFactory;
    private final MemberRepository memberRepository;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
        throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;

        String path = httpRequest.getRequestURI();

        // 로그인 기능이 구현되지 않은 클라이언트와 통신을 위해 모든 URL 의 필터 검증 생략
        // (이후 /api/auth 에 대해서만 필터 검증 생략 수정할 예정)
        if (path.startsWith("/")) {
            chain.doFilter(request, response);
            return;
        }

        String authorization = httpRequest.getHeader(AUTHORIZATION);

        try {
            // 헤더에 토큰이 존재하지 않거나 토큰 값을 파싱할 수 없는 경우 예외 던지기
            if (authorization == null || !authorization.startsWith(BEARER)) {
                throw new NotFoundException(ErrorCode.TOKEN_NOT_FOUND);
            }

            String token = getToken(authorization);

            // JWT 를 사이닝 키와 만료 날짜를 비교해 검증
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(JwtFactory.key)
                .build()
                .parseClaimsJws(token)
                .getBody();

            // 멤버 저장소에 존재하는 유저인지 확인 후 예외 던지기
            Integer memberId = claims.get(MEMBER_ID, Integer.class);
            Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException(ErrorCode.MEMBER_NOT_FOUND));

            // request 스코프 빈에 유저 정보를 등록
            userDetailFactory.getObject()
                .id(member.getId())
                .name(member.getName())
                .githubId(member.getGithubId());

        } catch (JwtException | NotFoundException e) {
            ErrorResponse errorResponse = new ErrorResponse(e.getMessage());

            HttpServletResponse httpResponse = (HttpServletResponse) response;
            httpResponse.setContentType("application/json;charset=UTF8");
            httpResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            httpResponse.getWriter().write(convertObjectToJson(errorResponse));
            return;
        }

        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private String convertObjectToJson(Object object) throws JsonProcessingException {
        if (object == null) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(object);
    }

    private String getToken(String authorization) {
        String[] split = authorization.split(" ");

        if (split.length != 2) {
            throw new NotFoundException(ErrorCode.TOKEN_NOT_FOUND);
        }
        return split[1];
    }

}
