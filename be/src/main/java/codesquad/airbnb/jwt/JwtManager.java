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

    public void saveRefreshTokenByMemberId(String memberId, String refreshToken) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(memberId, refreshToken, Duration.ofMinutes(30));
    }

    public String getRefreshTokenByMemberId(String memberId) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(memberId);
    }

    public void blacklistAccessToken(String accessToken, long expiredTime) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(accessToken, "logout", Duration.ofMillis(expiredTime));
    }

    public void removeRefreshToken(String memberId) {
        redisTemplate.delete(memberId);
    }
}
