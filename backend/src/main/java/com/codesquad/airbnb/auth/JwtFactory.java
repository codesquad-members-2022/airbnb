package com.codesquad.airbnb.auth;

import com.codesquad.airbnb.core.member.Member;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JwtFactory {

    public static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String create(Member member, int expiredTime) {
        // https://github.com/jwtk/jjwt#quickstart
        return Jwts.builder()
            .setHeader(createJwtHeader())
            .setClaims(createJwtClaims(member))
            .setExpiration(Date.from(Instant.now().plusSeconds(expiredTime)))
            .signWith(key, SignatureAlgorithm.HS256)
            .compact();
    }

    private static Map<String, Object> createJwtHeader() {
        Map<String, Object> header = new HashMap<>();
        header.put("typ", "JWT");
        header.put("alg", "HS256");
        header.put("regDate", System.currentTimeMillis());
        return header;
    }

    private static Map<String, Object> createJwtClaims(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", member.getId());
        return claims;
    }

}
