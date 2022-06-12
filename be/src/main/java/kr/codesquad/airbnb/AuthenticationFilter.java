package kr.codesquad.airbnb;

import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@WebFilter(urlPatterns = "/api/*")
@Slf4j
public class AuthenticationFilter extends GenericFilterBean {

    public static final String AUTHORIZED_MEMBER = "member1";
    private boolean rejectRequest = false;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        Optional<String> token = Optional.ofNullable(req.getHeader("token"));

        token.ifPresentOrElse(tokenString -> verifyAuthorizedMember(tokenString, response),
                () -> setTokenIsRequiredResponse((HttpServletResponse) response));

        if (rejectRequest) {
            rejectRequest = false;
            return;
        }

        chain.doFilter(request, response);
    }

    private void verifyAuthorizedMember(String tokenString, ServletResponse response) {
        if(!tokenString.equals(AUTHORIZED_MEMBER)) {
            setForbiddenResponse((HttpServletResponse) response);
        }
    }

    public void setForbiddenResponse(HttpServletResponse response) {
        rejectRequest = true;
        ErrorCode errorCode = ErrorCode.FORBIDDEN_USER;
        ErrorResponse errorResponse = new ErrorResponse(errorCode);
        log.error("AuthenticationFilter reject request to server. cause = {}", errorCode.getDetail());

        response.setStatus(errorCode.getHttpStatus().value());
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            String json = errorResponse.convertToJson();
            response.getWriter().write(json);
        } catch (IOException e) {
            log.warn("server error. cause = {}", e.getMessage());
        }
    }

    public void setTokenIsRequiredResponse(HttpServletResponse response) {
        rejectRequest = true;
        ErrorCode errorCode = ErrorCode.TOKEN_IS_REQUIRED;
        ErrorResponse errorResponse = new ErrorResponse(errorCode);
        log.error("AuthenticationFilter reject request to server. cause = {}", errorCode.getDetail());

        response.setStatus(errorCode.getHttpStatus().value());
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            String json = errorResponse.convertToJson();
            response.getWriter().write(json);
        } catch (IOException e) {
            log.warn("server error. cause = {}", e.getMessage());
        }
    }
}
