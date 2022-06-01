package com.team14.cherrybnb.revervation.application;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team14.cherrybnb.revervation.dto.DistanceInfo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class DistanceSearchService {

    @Value("${kakao.rest.api.key}")
    private String kakaoKey;

    public DistanceInfo navi(double originX, double originY, double destinationX, double destinationY) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String url = getUrl(originX, originY, destinationX, destinationY);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(getHeaders()), String.class);

        ObjectMapper objectMapper = new ObjectMapper();

        JsonNode body = objectMapper.readTree(response.getBody());
        JsonNode summary = body.get("Summary");
        double distance = summary.get("distance").asDouble();
        double duration = summary.get("duration").asDouble();

        return new DistanceInfo(distance, duration);
    }

    private MultiValueMap<String, String> getHeaders() {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("host", "apis-navi.kakaomobility.com");
        headers.add("Authorization", "KakaoAK " + kakaoKey);

        return headers;
    }

    private String getUrl(double originX, double originY, double destinationX, double destinationY) {
        String url = "https://apis-navi.kakaomobility.com/v1/directions";
        String origin = originX + ", " + originY;
        String destination = destinationX + ", " + destinationY;
        return UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("origin", origin)
                .queryParam("destination", destination)
                .queryParam("summary", true)
                .encode()
                .toUriString();

    }
}
