package codesquad.airbnb.service;

import codesquad.airbnb.dto.LoginResponse;
import codesquad.airbnb.jwt.JwtManager;
import codesquad.airbnb.jwt.JwtProvider;
import codesquad.airbnb.jwt.JwtValidator;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {

    private static final String TOKEN_TYPE = "Bearer ";
    private final JwtProvider jwtProvider;
    private final JwtManager jwtManager;
    private final JwtValidator jwtValidator;

    public LoginResponse createToken(String memberId) {
        String accessToken = jwtProvider.createAccessToken(memberId);
        String refreshToken = jwtProvider.createRefreshToken(memberId);

        return LoginResponse.builder()
            .message("로그인이 정상적으로 처리되었습니다.")
            .tokenType(TOKEN_TYPE)
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();
    }

    public void saveRefreshTokenAtRedis(Long memberId, String refreshToken) {
        jwtManager.addRefreshTokenByMemberId(String.valueOf(memberId), refreshToken);
    }

    public String reissueAccessToken(String refreshToken) {
        String memberId = jwtValidator.getMemberId(refreshToken);
        String refreshTokenAtRedis = jwtManager.getValueByKey(memberId);
        if (refreshTokenAtRedis == null) {
            throw new IllegalArgumentException("refresh 토큰의 만료기한이 지났습니다. 다시 로그인 해주세요.");
        }

        return jwtProvider.createAccessToken(memberId);
    }

    public void invalidateToken(String accessToken, String refreshToken) {
        jwtManager.blacklistAccessToken(accessToken, jwtValidator.getExpiration(accessToken));
        String memberId = jwtValidator.getMemberId(refreshToken);
        jwtManager.removeRefreshToken(memberId);
    }
}
