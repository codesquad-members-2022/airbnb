package com.team14.cherrybnb.openapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
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
public class DistanceSearchService {

    @Value("${kakao.rest.api.key}")
    private String kakaoKey;
    //private RestTemplate restTemplate;

    public List<DistanceInfoResponse> searchDistrictInfo(Position position) throws JsonProcessingException {
        District[] districts = District.values();
        ArrayList<DistanceInfoResponse> distanceInfoResponses = new ArrayList<>();

        for (District district : districts) {
            DistanceInfo distanceInfo = caculateDistanceAndDuration(position, district.getLongitude(), district.getLatitude());
            String distance = String.valueOf(distanceInfo.getDistance());
            String duration = String.valueOf(distanceInfo.getDuration());
            distanceInfoResponses.add(new DistanceInfoResponse(district.name(), distance, duration));
        }

        return distanceInfoResponses;
    }

    public DistanceInfo caculateDistanceAndDuration(Position position, double destinationX, double destinationY) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String url = getUrl(position.getX(), position.getY(), destinationX, destinationY);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(getHeaders()), String.class);

        ObjectMapper objectMapper = new ObjectMapper();

        JsonNode body = objectMapper.readTree(response.getBody());
        JsonNode routes = body.get("routes");
        JsonNode route = routes.get(0);
        int result_code = route.get("result_code").asInt();
        if (result_code != 0) {
            return new DistanceInfo(-999,-999);
        }
        JsonNode summary = route.get("summary");
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
        String origin = originX + "," + originY;
        String destination = destinationX + "," + destinationY;
        return UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("origin", origin)
                .queryParam("destination", destination)
                .queryParam("summary", true)
                .encode()
                .toUriString();

    }
}
