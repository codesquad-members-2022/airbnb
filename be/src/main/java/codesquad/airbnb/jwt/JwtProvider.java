package codesquad.airbnb.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtProvider {

    private static final long accessTokenValidityInMilliseconds = 60 * 1000; // access token 유효시간 : 2분
    private static final long refreshTokenValidityInMilliseconds = 60 * 30 * 1000; // refresh token 유효시간 : 30분

    public String createAccessToken(String memberId) {
        return createToken(memberId, accessTokenValidityInMilliseconds);
    }

    public String createRefreshToken(String memberId) {
        return createToken(memberId, refreshTokenValidityInMilliseconds);
    }

    private String createToken(String memberId, long expireTime) {
        if (expireTime <= 0) {
            throw new IllegalArgumentException("토큰의 만료시간은 0 보다 커야 합니다.");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(System.getenv("SECRET_KEY"));
        Key signatureKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
            .setSubject(String.valueOf(memberId))
            .signWith(signatureKey, signatureAlgorithm)
            .setExpiration(new Date(System.currentTimeMillis() + expireTime))
            .compact();
    }
}
