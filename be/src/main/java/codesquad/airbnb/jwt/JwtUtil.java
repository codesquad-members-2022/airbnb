package codesquad.airbnb.jwt;

import java.util.NoSuchElementException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;

public class JwtUtil {

    private static final String TOKEN_TYPE = "Bearer ";

    public static String getAccessToken(HttpServletRequest request) {
        String valueOfAuthorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (valueOfAuthorizationHeader == null || !valueOfAuthorizationHeader.startsWith(TOKEN_TYPE)) {
            throw new NoSuchElementException("access 토큰이 존재하지 않습니다.");
        }

        return valueOfAuthorizationHeader.substring(TOKEN_TYPE.length());
    }

    public static String getRefreshToken(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String refreshToken = null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("refresh_token")) {
                refreshToken = cookie.getValue();
                break;
            }
        }

        if (refreshToken == null) {
            throw new NoSuchElementException("refresh 토큰이 존재하지 않습니다.");
        }

        return refreshToken;
    }
}
