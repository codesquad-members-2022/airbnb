package com.team14.cherrybnb.openapi.kakao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team14.cherrybnb.openapi.District;
import com.team14.cherrybnb.openapi.dummy.DistanceInfo;
import com.team14.cherrybnb.openapi.dummy.DistanceInfoResponse;
import com.team14.cherrybnb.openapi.dummy.Position;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class DistanceSearchService {

    @Value("${kakao.rest.api.key}")
    private String kakaoKey;
    private final RestTemplate restTemplate;

    public List<DistanceInfoResponse> searchDistrictInfo(Position position) throws JsonProcessingException {
        District[] districts = District.values();
        ArrayList<DistanceInfoResponse> distanceInfoResponses = new ArrayList<>();

        for (District district : districts) {
            NaviRequest naviRequest = NaviRequest.of(position.getX(), position.getY(), district.getLongitude(), district.getLatitude());
            DistanceInfo distanceInfo = calculateDistanceAndDuration(naviRequest);
            String distance = String.valueOf(distanceInfo.getDistance());
            String duration = String.valueOf(distanceInfo.getDuration());
            distanceInfoResponses.add(new DistanceInfoResponse(district.name(), distance, duration));
        }

        return distanceInfoResponses;
    }

    private DistanceInfo calculateDistanceAndDuration(NaviRequest naviRequest) throws JsonProcessingException {
        String url = getUrl(naviRequest);
        ResponseEntity<NaviResponse> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(getHeaders()), NaviResponse.class);

        NaviResponse naviResponse = response.getBody();
        assert naviResponse != null;
        NaviInfo info = naviResponse.getInfo();
        if (info.getCode() != 0) {
            return new DistanceInfo(-999,-999);
        }
        Summary summary = info.getSummary();
        return new DistanceInfo(summary.getDistance(), summary.getDuration());
    }

    private MultiValueMap<String, String> getHeaders() {
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        headers.add("host", "apis-navi.kakaomobility.com");
        headers.add("Authorization", "KakaoAK " + kakaoKey);

        return headers;
    }

    private String getUrl(NaviRequest naviRequest) {
        String url = "https://apis-navi.kakaomobility.com/v1/directions";

        return UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("origin", naviRequest.getOrigin())
                .queryParam("destination", naviRequest.getDestination())
                .queryParam("summary", naviRequest.isSummary())
                .encode()
                .toUriString();

    }
}
