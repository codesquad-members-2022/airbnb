package com.team14.cherrybnb.auth.application;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class GithubTokenService {

    private final WebClient webClient;
    @Value("${github.client.id}")
    private String clientId;
    @Value("${github.secrets}")
    private String clientSecret;

}
