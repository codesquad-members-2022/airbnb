package codesquad.airbnb.service;

import codesquad.airbnb.dto.LoginResponse;
import codesquad.airbnb.jwt.JwtManager;
import codesquad.airbnb.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {

    private final JwtProvider jwtProvider;
    private final JwtManager jwtManager;

    public LoginResponse createToken(String email) {
        String accessToken = jwtProvider.createAccessToken(email);
        String refreshToken = jwtProvider.createRefreshToken();
        jwtManager.saveRefreshToken(email, refreshToken);

        return LoginResponse.builder()
            .email(email)
            .tokenType("Bearer")
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();
    }

}
