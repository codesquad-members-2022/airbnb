package codesquad.airbnb.jwt;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import java.util.Date;
import javax.xml.bind.DatatypeConverter;
import org.springframework.stereotype.Component;

@Component
public class JwtValidator {

    public boolean validateExpirationOfToken(String token) {
        try {
            return !Jwts.parserBuilder()
                .setSigningKey(DatatypeConverter.parseBase64Binary(System.getenv("SECRET_KEY")))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration()
                .before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}
