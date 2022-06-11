package com.team14.cherrybnb.openapi.kakao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.team14.cherrybnb.openapi.District;
import com.team14.cherrybnb.openapi.dummy.DistanceInfo;
import com.team14.cherrybnb.openapi.dummy.DistanceInfoResponse;
import com.team14.cherrybnb.openapi.dummy.Position;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.Disposable;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CountDownLatch;

@Service
@Slf4j
public class DistanceSearchService {

    private static final String REQUEST_URL = "/directions";

    private WebClient webClient;

    public DistanceSearchService(@Qualifier("kakao-navi") WebClient webClient) {
        this.webClient = webClient;
    }

    public List<DistanceInfoResponse> searchDistrictInfo(Position position) throws JsonProcessingException {
        District[] districts = District.values();
        Map<String, NaviResponse> naviResponses = new HashMap<>();
        CountDownLatch countDownLatch = new CountDownLatch(districts.length);

        for (District district : districts) {
            NaviRequest naviRequest = NaviRequest.of(position.getX(), position.getY(), district.getLongitude(), district.getLatitude());
            Mono<NaviResponse> naviResponseMono = sendReqeust(naviRequest);
            naviResponseMono.subscribe(naviResponse -> {
                naviResponses.put(district.name(), naviResponse);
                countDownLatch.countDown();
            });
        }

        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        List<DistanceInfoResponse> distanceInfoResponses = new ArrayList<>();

        for (String districtName : naviResponses.keySet()) {
            NaviResponse naviResponse = naviResponses.get(districtName);
            DistanceInfo distanceInfo = getDistanceInfo(naviResponse);
            String distance = String.valueOf(distanceInfo.getDistance());
            String duration = String.valueOf(distanceInfo.getDuration());
            distanceInfoResponses.add(new DistanceInfoResponse(districtName, distance, duration));
        }

        return distanceInfoResponses;
    }

    private Mono<NaviResponse> sendReqeust(NaviRequest naviRequest) throws JsonProcessingException {

//        ResponseEntity<NaviResponse> response = restTemplate.exchange(naviRequest.getUrl(), HttpMethod.GET,
//                new HttpEntity<>(getHeaders()), NaviResponse.class);

        return webClient.get().uri(uriBuilder -> uriBuilder.path(REQUEST_URL)
                .queryParam("origin", naviRequest.getOrigin())
                        .queryParam("destination", naviRequest.getDestination())
                        .queryParam("summary", naviRequest.isSummary())
                        .build())
                .retrieve()
                .bodyToMono(NaviResponse.class);

    }

    private DistanceInfo getDistanceInfo(NaviResponse naviResponse) {
        NaviInfo info = naviResponse.getInfo();
        if (info.getCode() != 0) {
            return new DistanceInfo(-999,-999);
        }
        Summary summary = info.getSummary();
        return new DistanceInfo(summary.getDistance(), summary.getDuration());
    }


}
