package com.team14.cherrybnb.openapi.kakao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.geolatte.geom.M;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@Getter
@AllArgsConstructor
public class NaviRequest {
    private static final String DELIMITER = ",";
    private static final String REQUEST_URL = "/directions";

    private String origin;
    private String destination;
    private boolean summary;

    public static NaviRequest of(double originX, double originY, double destinationX, double destinationY) {
        String origin = originX + DELIMITER + originY;
        String destination = destinationX + DELIMITER + destinationY;
        return new NaviRequest(origin, destination, true);
    }

//    public UriBuilder getUrl() {
//        Map<String, Object> params = new HashMap<>();
//        params.put("origin", this.getOrigin());
//        params.put("destination", this.getDestination());
//        params.put("summary", this.isSummary());
//        return params;
//
//    }
}
