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

    public void addRefreshTokenByMemberId(String memberId, String refreshToken) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(memberId, refreshToken, Duration.ofMinutes(2));
    }

    public String getValueByKey(String key) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        return valueOperations.get(key);
    }

    public void blacklistAccessToken(String accessToken, long expireTime) {
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        valueOperations.set(accessToken, JwtConstant.LOGOUT_FLAG, Duration.ofMillis(expireTime));
    }

    public void removeRefreshToken(String key) {
        redisTemplate.delete(key);
    }
}
