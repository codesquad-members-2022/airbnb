package codesquad.airbnb.jwt;

import java.time.Duration;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtManager {

    private final RedisTemplate<String, String> redisTemplate;

    public void saveRefreshTokenByEmail(String email, String refreshToken) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(email, refreshToken, Duration.ofMinutes(30));
    }

    public String getRefreshTokenByEmail(String email) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(email);
    }

    public void removeRefreshToken(String refreshToken) {
        redisTemplate.delete(refreshToken);
    }
}
