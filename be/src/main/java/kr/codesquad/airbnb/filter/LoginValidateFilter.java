package kr.codesquad.airbnb.filter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import kr.codesquad.airbnb.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.PatternMatchUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Slf4j
@RequiredArgsConstructor
public class LoginValidateFilter extends OncePerRequestFilter {

    private static final String HEADER_AUTHORIZATION = "authorization";
    private static final String TOKEN_PREFIX = "Bearer ";
    private static final String[] authNeededUrl = {"/accommodations/*/reservation"};

    private final TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain filterChain) throws ServletException, IOException {

        String requestUrl = request.getRequestURI();

        if (isAuthNeededUrl(requestUrl)) {
            log.info("로그인 인증 유무 확인 로직 실행 {}", requestUrl);
            String accessToken = getAccessToken(request);
            if (!StringUtils.hasText(accessToken) || !tokenProvider.validateToken(accessToken)) {
                throw new RuntimeException("로그인이 필요합니다!!");
            }
        }
        filterChain.doFilter(request, response);
    }

    private boolean isAuthNeededUrl(String requestUrl) {
        return PatternMatchUtils.simpleMatch(authNeededUrl, requestUrl);
    }

    private String getAccessToken(HttpServletRequest request) {
        String headerValue = request.getHeader(HEADER_AUTHORIZATION);

        if (headerValue == null) {
            return null;
        }

        if (headerValue.startsWith(TOKEN_PREFIX)) {
            return headerValue.substring(TOKEN_PREFIX.length());
        }

        return null;
    }
}
