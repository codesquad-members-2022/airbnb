package kr.codesquad.airbnb.service;

import com.google.gson.Gson;
import kr.codesquad.airbnb.domain.member.Member;
import kr.codesquad.airbnb.repository.MemberRepository;
import kr.codesquad.airbnb.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.charset.StandardCharsets;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@Service
@RequiredArgsConstructor
public class OauthService {

    private final MemberRepository memberRepository;
    private final TokenProvider tokenProvider;

    public String getJwtToken(String authCode) throws FileNotFoundException {
        String parsedToken = getAccessToken(authCode);
        Map<String, String> userInfo = getUserInfo(parsedToken);
        String userName = userInfo.get("login");
        Member savedMember = memberRepository.save(new Member(userName));
        return tokenProvider.createAccessToken(savedMember.getName(), savedMember.getId());
    }

    private String getAccessToken(String authCode) throws FileNotFoundException {
        String secretKey = new Scanner(new File("/Users/kylechoi/Documents/Dev/airbnb/be/src/main/resources/secret.txt")).nextLine();

        WebClient getAccessTokenClient = WebClient.builder()
                .baseUrl("https://github.com")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();

        Map<String, String> bodyValues = new HashMap<>();
        bodyValues.put("client_id", "896365878d33e50fa28b");
        bodyValues.put("code", authCode);
        bodyValues.put("client_secret", secretKey);

        WebClient.ResponseSpec tokenResponseSpec = getAccessTokenClient.post()
                .uri("/login/oauth/access_token")
                .body(Mono.just(bodyValues), Map.class)
                .accept(MediaType.APPLICATION_JSON)
                .acceptCharset(StandardCharsets.UTF_8)
                .ifNoneMatch("*")
                .ifModifiedSince(ZonedDateTime.now())
                .retrieve();

        String tokenResponse = tokenResponseSpec.bodyToMono(String.class).block();

        return tokenResponse.split("\"")[3];
    }

    private Map<String, String> getUserInfo(String parsedToken) {
        WebClient getUserInfoClient = WebClient.builder()
                .baseUrl("https://api.github.com")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();

        WebClient.ResponseSpec userInfoResponseSpec = getUserInfoClient.get()
                .uri("/user")
                .header("authorization", String.format("token %s", parsedToken))
                .acceptCharset(StandardCharsets.UTF_8)
                .retrieve();

        String userInfoResponse = userInfoResponseSpec.bodyToMono(String.class).block();

        return new Gson().fromJson(userInfoResponse, Map.class);
    }
}
