package kr.codesquad.airbnb.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.LoginResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

import static kr.codesquad.airbnb.jwt.OauthUtils.*;

@Component
public class JwtProvider {

    @Value("${jwt.issuer}")
    private String ISSUER;

    @Value("${jwt.secret-key}")
    private String SECRET_KEY;

    public LoginResponse createLoginResponse(Members members){
        Jwt jwt = createToken(members);
        return new LoginResponse(jwt.getJwt(), members.getImageUrl());
    }

    public Jwt createToken(Members members) {
        String token = JWT.create()
                .withExpiresAt(new Date())
                .withClaim(GITHUB_NAME, members.getName())
                .withClaim(GITHUB_EMAIL, members.getEmail())
                .withClaim(GITHUB_ID, members.getGithubId())
                .withClaim(GITHUB_AVATAR_URL, members.getImageUrl())
                .withIssuer(ISSUER)
                .sign(Algorithm.HMAC256(SECRET_KEY));
        return new Jwt(token);
    }

    public DecodedJWT decodeToken(Jwt jwt){
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY))
                .acceptExpiresAt(2000000)
                .build();
        return verifier.verify(jwt.getJwt());
    }
}
