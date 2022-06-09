package com.codesquad.airbnb.auth.controller;

import com.codesquad.airbnb.auth.AuthService;
import com.codesquad.airbnb.auth.JwtFactory;
import com.codesquad.airbnb.auth.client.GithubAuthClient;
import com.codesquad.airbnb.auth.domain.GithubToken;
import com.codesquad.airbnb.auth.domain.GithubUser;
import com.codesquad.airbnb.auth.domain.OAuthProperties;
import com.codesquad.airbnb.core.member.Member;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Github OAuth API")
@RestController
@RequestMapping("/auth/github")
public class GithubAuthController extends AbstractAuthController {

    private static final int EXPIRED_TIME = 86_400;

    private final GithubAuthClient authClient;
    private final AuthService authService;

    public GithubAuthController(GithubAuthClient authClient, AuthService authService,
        OAuthProperties properties) {
        super(properties.getProvider("github"));
        this.authClient = authClient;
        this.authService = authService;
    }

    @Override
    @GetMapping("/callback")
    public ResponseEntity<Void> callback(
        @RequestParam(value = "code", required = false) String code) {
        GithubToken githubToken = authClient.getToken(code);
        GithubUser githubUser = authClient.getUser(githubToken.getAccessToken());
        Member member = authService.upsertMember(githubUser.toMember());

        String accessToken = JwtFactory.create(member, EXPIRED_TIME);
        ResponseCookie cookie = ResponseCookie.from("access_token", accessToken)
            .maxAge(EXPIRED_TIME)
            .path("/")
            .build();

        return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
            .header(HttpHeaders.SET_COOKIE, cookie.toString())
            .header(HttpHeaders.LOCATION, "/")
            .build();
    }

}
