package com.codesquad.airbnb.room.dto.request;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
public class RoomSearchRequest {

    // location
    @Range(message = "경도는 -180 ~ +180 사이의 값이어야 합니다.", min = -180, max = 180)
    private Double longitude;

    @Range(message = "위도는 -90 ~ +90 사이의 값이어야 합니다.", min = -90, max = 90)
    private Double latitude;

    @Range(message = "거리 값은 0 이상이어야 합니다.", min = 0)
    private Double horizontalRadius;

    @Range(message = "거리 값은 0 이상이어야 합니다.", min = 0)
    private Double verticalRadius;

    // stay period
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    // price range
    @Range(message = "가격 값은 0 이상이어야 합니다.", min = 0)
    private Integer minPrice;

    @Range(message = "가격 값은 0 이상이어야 합니다.", min = 0)
    private Integer maxPrice;

    // number of guest
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numAdult;

    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numChild;

    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numInfant;

}
