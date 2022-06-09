package com.team14.cherrybnb.auth.application;

import com.team14.cherrybnb.auth.github.GithubToken;
import com.team14.cherrybnb.auth.github.GithubTokenService;
import com.team14.cherrybnb.auth.github.GithubUser;
import com.team14.cherrybnb.auth.jwt.JwtProvider;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final GithubTokenService githubTokenService;
    private final JwtProvider jwtProvider;

    public String login(String code) {
        GithubToken githubToken = githubTokenService.getAccessToken(code);
        GithubUser userInfo = githubTokenService.getUserInfo(githubToken.getAccessToken());

        // db 저장 로직
        return jwtProvider.generateToken(userInfo.getGithubId());
    }

}
