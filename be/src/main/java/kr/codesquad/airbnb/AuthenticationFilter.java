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

@WebFilter(urlPatterns = "/api/*")
@Slf4j
public class AuthenticationFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String token = req.getHeader("token");

        if (!token.equals("member1")) {
            sendForbiddenResponse((HttpServletResponse) response);
            return;
        }

        chain.doFilter(request, response);
    }

    public void sendForbiddenResponse(HttpServletResponse response) throws IOException {
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
            response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage());
        }
    }
}
