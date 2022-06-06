package codesquad.airbnb.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Random;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtProvider {

    private static final long accessTokenValidityInMilliseconds = 60 * 1000; // access token 유효시간 : 2분
    private static final long refreshTokenValidityInMilliseconds = 60 * 30 * 1000; // refresh token 유효시간 : 30분

    public String createAccessToken(String email) {
        return createToken(email, accessTokenValidityInMilliseconds);
    }

    public String createRefreshToken(String email) {
        return createToken(email, refreshTokenValidityInMilliseconds);
    }

    private String createToken(String payload, long expireTime) {
        if (expireTime <= 0) {
            throw new IllegalArgumentException("토큰의 만료시간은 0 보다 커야 합니다.");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(System.getenv("SECRET_KEY"));
        Key signatureKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
            .setSubject(payload)
            .signWith(signatureKey, signatureAlgorithm)
            .setExpiration(new Date(System.currentTimeMillis() + expireTime))
            .compact();
    }
}
