package kr.codesquad.airbnb.token;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TokenProvider {

    private final Key key;
    private final long accessTokenExpireTime;

    public TokenProvider(String secret, long accessTokenExpireTime) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpireTime = accessTokenExpireTime;
    }

    public String createAccessToken(String userName, Long id) {
        Date now = getCurrentTime();
        return Jwts.builder()
                .setIssuer(userName)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + accessTokenExpireTime))
                .claim("id", id)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean validateToken(String token) {
        return parseClaims(token) != null;
    }

    private Claims parseClaims(String token) {
        try {
            return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        } catch (SecurityException e) {
            log.info("⚠️Invalid JWT signature.");
        } catch (MalformedJwtException e) {
            log.info("⚠️Invalid JWT token.");
        } catch (ExpiredJwtException e) {
            // TODO : 만료된 토큰 처리
            log.info("⚠️Expired JWT token.");
            return e.getClaims();
        } catch (UnsupportedJwtException e) {
            log.info("⚠️Unsupported JWT token.");
        } catch (IllegalArgumentException e) {
            log.info("⚠️JWT token compact of handler are invalid.");
        }
        return null;
    }

    private Date getCurrentTime() {
        return new Date();
    }
}
