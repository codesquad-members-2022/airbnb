package com.team14.cherrybnb.auth.github;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import org.springframework.web.reactive.function.client.WebClient;

import java.net.URI;

@Service
@RequiredArgsConstructor
@Slf4j
public class GithubTokenService {

    private final String ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";

    private final WebClient webClient;
    @Value("${github.client.id}")
    private String clientId;
    @Value("${github.client.secrets}")
    private String clientSecret;


    public GithubToken getAccessToken(String code) {

        return webClient.post().uri(URI.create(ACCESS_TOKEN_URL))
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(new GithubTokenRequest(clientId, clientSecret, code))
                .retrieve()
                .bodyToMono(GithubToken.class)
                .block();
    }

    public GithubUser getUserInfo(String accessToken) {

        log.info("{}", accessToken);

        return webClient.get()
                .uri("/user")
                .header(HttpHeaders.AUTHORIZATION, accessToken)
                .retrieve()
                .bodyToMono(GithubUser.class)
                .block();
    }

}
