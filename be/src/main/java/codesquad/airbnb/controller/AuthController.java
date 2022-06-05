package codesquad.airbnb.controller;

import codesquad.airbnb.dto.LoginResponse;
import codesquad.airbnb.jwt.JwtManager;
import codesquad.airbnb.jwt.JwtProvider;
import codesquad.airbnb.service.AuthService;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtProvider jwtProvider;
    private final JwtManager jwtManager;

    @GetMapping("/api/github-login")
    public ResponseEntity<LoginResponse> login(HttpServletResponse response, @RequestParam String code) {
        String email = authService.authorizeForThirdParty(code);

        String accessToken = jwtProvider.createAccessToken(email);
        String refreshToken = jwtProvider.createRefreshToken();
        jwtManager.saveRefreshToken(email, refreshToken);

        response.addCookie(createCookieWithRefreshToken(refreshToken));

        LoginResponse loginResponse = LoginResponse.builder()
            .email(email)
            .tokenType("Bearer")
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();

        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    private Cookie createCookieWithRefreshToken(String refreshToken) {
        Cookie cookie = new Cookie("refresh_token", refreshToken);
        cookie.setPath("/api");
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        return cookie;
    }
}
