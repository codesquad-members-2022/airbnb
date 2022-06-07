package codesquad.airbnb.interceptor;

import codesquad.airbnb.dto.ResponseMessage;
import codesquad.airbnb.jwt.JwtManager;
import codesquad.airbnb.jwt.JwtUtil;
import codesquad.airbnb.jwt.JwtValidator;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private final JwtValidator jwtValidator;
    private final JwtManager jwtManager;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
        throws IOException {
        if (!validateThatHttpMethodIsPost(request)) {
            return true;
        }

        String accessToken = JwtUtil.getAccessToken(request);
        String isLogout = jwtManager.getValueByKey(accessToken);
        if (jwtValidator.validateExpirationOfToken(accessToken) && isLogout == null) {
            return true;
        }

        setResponseHeader(response);
        setResponseBody(response);

        return false;
    }

    private boolean validateThatHttpMethodIsPost(HttpServletRequest request) {
        String httpMethod = request.getMethod();
        return httpMethod.equals("POST");
    }

    private void setResponseHeader(HttpServletResponse response) {
        response.setStatus(HttpStatus.FORBIDDEN.value());
        response.setContentType("application/json");
        response.setCharacterEncoding(String.valueOf(StandardCharsets.UTF_8));
    }

    private void setResponseBody(HttpServletResponse response) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        ResponseMessage responseMessage = new ResponseMessage(HttpStatus.FORBIDDEN, "access 토큰이 만료되었습니다.");
        String stringOfResponseMessage = mapper.writeValueAsString(responseMessage);
        response.getWriter().write(stringOfResponseMessage);
    }
}
