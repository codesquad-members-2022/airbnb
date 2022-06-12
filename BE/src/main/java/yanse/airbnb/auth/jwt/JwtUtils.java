package yanse.airbnb.auth.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import yanse.airbnb.domain.member.Members;

@NoArgsConstructor
@Service
public class JwtUtils {
	@Value("${jwt.secret-key}")
	private String SECRET_KEY;

	@Value("${jwt.issuer}")
	private String ISSUER;

	public String createJwtToken(Members member) {
		return JWT.create()
			.withIssuedAt(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()))
			.withExpiresAt(Date.from(LocalDateTime.now().plusHours(1L).atZone(ZoneId.systemDefault()).toInstant()))
			.withClaim("githubName", member.getMembersName())
			.withClaim("githubEmail", member.getEmail())
			.withClaim("githubId", member.getGithubId())
			.withClaim("githubAvatarUrl", member.getMembersImage())
			.withIssuer(ISSUER)
			.sign(Algorithm.HMAC256(SECRET_KEY));
	}

	public DecodedJWT decodedJWT(String jwt) {
		return JWT.decode(jwt);
	}

	public DecodedJWT verifyToken(String jwt) {
		JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY))
			.withIssuer(ISSUER)
			.acceptExpiresAt(5)
			.build();

		return verifier.verify(jwt);
	}

	public Long getUserId(DecodedJWT decodedJWT) {
		return Long.parseLong(decodedJWT.getAudience().get(0));
	}
}
