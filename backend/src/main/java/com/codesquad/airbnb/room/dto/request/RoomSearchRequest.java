package com.codesquad.airbnb.room.dto.request;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
public class RoomSearchRequest {

    // location
    private Double longitude;
    private Double latitude;
    private Double horizontalRadius;
    private Double verticalRadius;

    // stay period
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    // price range
    private Integer minPrice;
    private Integer maxPrice;

    // number of guest
    private Integer numAdult;
    private Integer numChild;
    private Integer numInfant;

}
