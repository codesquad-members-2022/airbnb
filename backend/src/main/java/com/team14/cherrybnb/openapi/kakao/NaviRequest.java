package com.team14.cherrybnb.openapi.kakao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.util.UriComponentsBuilder;

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

    public String getUrl() {

        return UriComponentsBuilder.fromHttpUrl(REQUEST_URL)
                .queryParam("origin", this.getOrigin())
                .queryParam("destination", this.getDestination())
                .queryParam("summary", this.isSummary())
                .encode()
                .toUriString();
    }
}
