package kr.codesquad.airbnb.configuration;

import kr.codesquad.airbnb.token.TokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JwtConfig {

    @Value("${jwt.secret}")
    private String jwtSecret;
    @Value("${app.auth.accessTokenExpireTime}")
    private String accessTokenExpireTime;

    @Bean
    public TokenProvider jwtProvider() {
        return new TokenProvider(
            jwtSecret,
            Long.parseLong(accessTokenExpireTime)
        );
    }
}
