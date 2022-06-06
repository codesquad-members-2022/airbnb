package codesquad.airbnb.interceptor;

import codesquad.airbnb.dto.LoginResponse;
import codesquad.airbnb.jwt.JwtManager;
import codesquad.airbnb.jwt.JwtProvider;
import codesquad.airbnb.jwt.JwtUtil;
import codesquad.airbnb.jwt.JwtValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.NoSuchElementException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private static final String TOKEN_TYPE = "Bearer ";

    private final JwtValidator jwtValidator;
    private final JwtManager jwtManager;
    private final JwtProvider jwtProvider;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        if (!validateThatHttpMethodIsPost(request)) {
            return true;
        }

        String accessToken = JwtUtil.getAccessToken(request);
        if (jwtValidator.validateExpirationOfToken(accessToken)) {
            return true;
        }

        String refreshToken = JwtUtil.getRefreshToken(request);
        String email = jwtValidator.getPayload(refreshToken);

        if (!jwtValidator.validateExpirationOfToken(refreshToken)) {
            throw new NoSuchElementException("refresh 토큰의 만료기한이 지났습니다. 다시 로그인 해주세요.");
        }

        issueRenewedAccessToken(response, email);

        return false;
    }

    private boolean validateThatHttpMethodIsPost(HttpServletRequest request) {
        String httpMethod = request.getMethod();
        return httpMethod.equals("POST");
    }

    private void issueRenewedAccessToken(HttpServletResponse response, String email) throws IOException {
        String refreshToken = jwtManager.getRefreshTokenByEmail(email);

        if (refreshToken == null) {
            throw new NoSuchElementException("refresh 토큰이 존재하지 않습니다.");
        }

        String renewedAccessToken = jwtProvider.createAccessToken(email);
        LoginResponse loginResponse = LoginResponse.builder()
            .email(email)
            .tokenType(TOKEN_TYPE)
            .accessToken(renewedAccessToken)
            .refreshToken(refreshToken)
            .build();

        setResponseHeader(response, renewedAccessToken);
        setResponseBody(response, loginResponse);
    }

    private void setResponseHeader(HttpServletResponse response, String renewedAccessToken) {
        response.setStatus(HttpStatus.OK.value());
        response.setContentType("application/json");
        response.setCharacterEncoding(String.valueOf(StandardCharsets.UTF_8));
        response.addHeader("access_token", renewedAccessToken);
    }

    private void setResponseBody(HttpServletResponse response, LoginResponse responseMessage) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        String stringOfResponseMessage = mapper.writeValueAsString(responseMessage);
        response.getWriter().write(stringOfResponseMessage);
    }
}
