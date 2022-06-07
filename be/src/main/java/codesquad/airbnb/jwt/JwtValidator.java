package codesquad.airbnb.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.util.Date;
import java.util.NoSuchElementException;
import javax.xml.bind.DatatypeConverter;
import org.springframework.stereotype.Component;

@Component
public class JwtValidator {

    private final static String SECRET_KEY = System.getenv("SECRET_KEY");

    public boolean validateExpirationOfToken(String token) {
        try {
            return !Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String getMemberId(String token) {
        try {
            return Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
        } catch (ExpiredJwtException e) {
            return e.getClaims().getSubject();
        } catch (JwtException e) {
            throw new NoSuchElementException("유효하지 않은 토큰입니다.");
        }
    }

    public long getExpiration(String accessToken) {
        Date expiration = Jwts.parserBuilder()
            .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
            .build()
            .parseClaimsJws(accessToken)
            .getBody()
            .getExpiration();

        Date currentTime = new Date();

        return expiration.getTime() - currentTime.getTime();
    }
}
