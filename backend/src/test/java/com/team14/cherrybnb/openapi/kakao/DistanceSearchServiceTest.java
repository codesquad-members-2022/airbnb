package com.team14.cherrybnb.openapi.kakao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.client.RootUriTemplateHandler;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;

import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.web.util.UriTemplateHandler;

import java.net.URI;

import static org.junit.jupiter.api.Assertions.*;

@PropertySource(value = "classpath:application.yml", ignoreResourceNotFound = true)
@SpringBootTest
class DistanceSearchServiceTest {

    @Value("${KAKAO_REST_KEY}")
    String key;

    @Test
    void test() {
        String url = "https://apis-navi.kakaomobility.com/v1";

        String origin = "126.97857310672501,37.56654037462486";
        String destination = "127.17751600488093,37.2409718113933";
        String uri = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("origin", origin)
                .queryParam("destination", destination)
                .queryParam("summary", true)
                .encode()
                .toUriString();

        System.out.println(uri.toString());
        MultiValueMap<String, Object> params = new LinkedMultiValueMap<>();
        params.add("origin", origin);
        params.add("destination", destination);
        params.add("summary", true);

        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("host", "apis-navi.kakaomobility.com");
        headers.add("Authorization", "KakaoAK " + key);
        RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();
        RestTemplate restTemplate = restTemplateBuilder.uriTemplateHandler(new RootUriTemplateHandler(url)).build();
        UriTemplateHandler uriTemplateHandler = restTemplate.getUriTemplateHandler();
        //
        ResponseEntity<NaviResponse> exchange = restTemplate.exchange("/directions?origin=126.97857310672501,37.56654037462486&destination=127.17751600488093,37.2409718113933&summary=true", HttpMethod.GET, new HttpEntity<>(headers), NaviResponse.class);

        NaviResponse body = exchange.getBody();

        System.out.println(body);
    }
}
