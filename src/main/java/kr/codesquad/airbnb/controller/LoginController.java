package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.GitHubUser;
import kr.codesquad.airbnb.dto.LoginResponse;
import kr.codesquad.airbnb.jwt.JwtProvider;
import kr.codesquad.airbnb.service.GithubOAuthService;
import kr.codesquad.airbnb.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final MemberService memberService;
    private final GithubOAuthService githubOAuthService;
    private final JwtProvider jwtProvider;

    @GetMapping("/login/oauth/github")
    public LoginResponse Login(@RequestParam String code){
        String accessToken = githubOAuthService.getAccessToken(code);
        GitHubUser gitHubUser = githubOAuthService.getGithubUser(accessToken);
        Members loginMember = memberService.findLoginMember(gitHubUser);
        return jwtProvider.createLoginResponse(loginMember);
    }
}
