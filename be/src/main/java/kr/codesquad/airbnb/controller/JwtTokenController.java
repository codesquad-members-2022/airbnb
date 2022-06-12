package kr.codesquad.airbnb.controller;

import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.Date;
import java.util.Map;

@RestController
public class JwtTokenController {

    @GetMapping("/newtoken")
    public String makeJwtToken() {
        Date now = new Date();

        String token = Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofMinutes(30).toMillis()))
                .claim("id", "honux")
                .claim("email", "db1004@gmail.com")
                .signWith(SignatureAlgorithm.HS256, "secret")
                .compact();

        return token;
    }

    @GetMapping("/parsetoken")
    public String parseToken(@RequestHeader Map<String, String> requestHeader) {
        System.out.println(requestHeader.keySet());
        if (!requestHeader.containsKey("authorization")) {
            return "Not Authorized(Doesn't have Authorization key)";
        }

        String token = requestHeader.get("authorization");
        if (!token.startsWith("Bearer ")) {
            return "Not Authorized(Doesn't start with Bearer)";
        }
        String tokenContent = token.substring("Bearer ".length());

        return Jwts.parser()
                .setSigningKey("secret")
                .parseClaimsJws(tokenContent)
                .getBody().toString();
    }
}
