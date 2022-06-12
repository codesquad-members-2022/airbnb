package yanse.airbnb.auth.jwt;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.util.Strings;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@RequiredArgsConstructor
@Component
public class JwtInterceptor implements HandlerInterceptor {

	private final JwtUtils jwtUtils;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		return verifyJwtToken(request, response);
	}

	private boolean verifyJwtToken(HttpServletRequest request, HttpServletResponse response) {
		String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

		if (!Strings.isNotBlank(authorizationHeader) || !authorizationHeader.startsWith("Bearer")) {
			response.setStatus(HttpStatus.FORBIDDEN.value());
			return false;
		}
		try {
			String accessToken = authorizationHeader.replaceFirst("Bearer", Strings.EMPTY).trim();
			DecodedJWT decodedJWT = jwtUtils.verifyToken(accessToken);
			request.setAttribute("User_id", jwtUtils.getUserId(decodedJWT));
		} catch (TokenExpiredException e) {
			response.setStatus(HttpStatus.UNAUTHORIZED.value());
			return false;
		} catch (JWTVerificationException ex) {
			response.setStatus(HttpStatus.FORBIDDEN.value());
			return false;
		}

		return true;
	}
}
