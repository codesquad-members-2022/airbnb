package com.airbnb.domain.login;

import com.airbnb.api.login.oauth.OAuthLoginController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;

public class KakaoOAuthServer extends OAuthServerImpl {

    private static final Logger log = LoggerFactory.getLogger(KakaoOAuthServer.class);

    private static final String KAKAO_TOKEN_SERVER_URI = "https://kauth.kakao.com/oauth/token";
    public static final String KAKAO_OAUTH_SERVER_URI = "https://kapi.kakao.com/v2/user/me";
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public OauthToken getOAuthToken(String code) {
        HttpHeaders headers = createHeaders(null); // header 생성
        MultiValueMap<String, String> params = createParams(code); // 전달할 params

        // code 를 통해 Kakao 쪽으로 다시 Access Token을 받기 위한 요청부분
        HttpEntity<MultiValueMap<String, String>> accessTokenRequest = new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                KAKAO_TOKEN_SERVER_URI,
                HttpMethod.POST,
                accessTokenRequest,
                String.class
        );
        OauthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(response.getBody(), KakaoToken.class);
        } catch (JsonProcessingException e) {
            log.info("[ERROR] : getOauthToken 을 얻을수 없음");
        }
        return oauthToken;
    }

    @Override
    public UserProfileDto getUserProfile(OauthToken oAuthToken) {
        HttpHeaders headers = createHeaders(oAuthToken.getAccessToken()); // 헤더 만들기

        HttpEntity<MultiValueMap<String, String>> accessProfileRequest = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange( // 사용자 정보 반환받기
                KAKAO_OAUTH_SERVER_URI,
                HttpMethod.POST,
                accessProfileRequest,
                String.class
        );

        objectMapper.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
        KakaoProfile kakaoProfile;
        try {
            kakaoProfile = objectMapper.readValue(response.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("변환할 수 없는 User 입니다.");
        }

        Long id = kakaoProfile.getId();
        String email = kakaoProfile.kakaoAccount.getEmail();
        String username = kakaoProfile.kakaoAccount.profile.getNickname();
        return new UserProfileDto(id, email, username);
    }

    private MultiValueMap<String, String> createParams(String code) {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", "e274f62c505ebb4fe82d0feb387be030");
        params.add("redirect_uri", "http://localhost:8080/api/login/oauth/callback/kakao");
        params.add("code", code);
        return params;
    }
}
