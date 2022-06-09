package codesquad.airbnb.controller;

import codesquad.airbnb.dto.LoginResponse;
import codesquad.airbnb.dto.ResponseMessage;
import codesquad.airbnb.jwt.JwtUtil;
import codesquad.airbnb.service.OAuthService;
import codesquad.airbnb.service.TokenService;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final OAuthService OAuthService;
    private final TokenService tokenService;

    @GetMapping("/api/login")
    public ResponseEntity<LoginResponse> login(HttpServletResponse response, @RequestParam String code) {
        Long memberId = OAuthService.authorizeForThirdParty(code);
        LoginResponse loginResponse = tokenService.createToken(String.valueOf(memberId));

        response.addHeader("access_token", loginResponse.getAccessToken());
        response.addCookie(createCookieWithRefreshToken(loginResponse.getRefreshToken()));

        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }

    private Cookie createCookieWithRefreshToken(String refreshToken) {
        Cookie cookie = new Cookie("refresh_token", refreshToken);
        cookie.setPath("/api");
        cookie.setHttpOnly(true);
        return cookie;
    }

    @PostMapping("/api/access-token/reissue")
    public ResponseEntity<ResponseMessage> reissue(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = JwtUtil.getRefreshToken(request);
        String renewedAccessToken = tokenService.reissueAccessToken(refreshToken);

        response.addHeader("access_token", renewedAccessToken);
        ResponseMessage message = new ResponseMessage(HttpStatus.OK, "access 토큰이 갱신되었습니다.");

        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @GetMapping("/api/logout")
    public ResponseEntity<ResponseMessage> logout(HttpServletRequest request) {
        String accessToken = JwtUtil.getAccessToken(request);
        String refreshToken = JwtUtil.getRefreshToken(request);

        tokenService.invalidateToken(accessToken, refreshToken);
        ResponseMessage message = new ResponseMessage(HttpStatus.OK, "로그아웃이 처리되었습니다.");

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
