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

    public String createAccessToken(String memberId) {
        return createToken(memberId, JwtConstant.ACCESS_TOKEN_DURATION);
    }

    public String createRefreshToken(String memberId) {
        return createToken(memberId, JwtConstant.REFRESH_TOKEN_DURATION);
    }

    private String createToken(String memberId, long expireTime) {
        if (expireTime <= 0) {
            throw new IllegalArgumentException("토큰의 만료시간은 0 보다 커야 합니다.");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(JwtConstant.SECRET_KEY);
        Key signatureKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()
            .setSubject(String.valueOf(memberId))
            .signWith(signatureKey, signatureAlgorithm)
            .setExpiration(new Date(System.currentTimeMillis() + expireTime))
            .compact();
    }
}
