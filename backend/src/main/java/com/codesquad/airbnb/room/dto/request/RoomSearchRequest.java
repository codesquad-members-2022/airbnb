package com.codesquad.airbnb.room.dto.request;

import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
public class RoomSearchRequest {

    // location
    @ApiModelProperty(value = "사용자 현재 위치의 경도 값")
    @Range(message = "경도는 -180 ~ +180 사이의 값이어야 합니다.", min = -180, max = 180)
    private Double longitude;

    @ApiModelProperty(value = "사용자 현재 위치의 위도 값")
    @Range(message = "위도는 -90 ~ +90 사이의 값이어야 합니다.", min = -90, max = 90)
    private Double latitude;

    @ApiModelProperty(value = "사용자 현재 위치에서 지도 상하 반경 (km)")
    @Range(message = "거리 값은 0 이상이어야 합니다.", min = 0)
    private Double horizontalRadius;

    @ApiModelProperty(value = "사용자 현재 위치에서 지도 죄우 반경 (km)")
    @Range(message = "거리 값은 0 이상이어야 합니다.", min = 0)
    private Double verticalRadius;

    // stay period
    @ApiModelProperty(value = "체크인 날짜 (DATE)")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @ApiModelProperty(value = "체크아웃 날짜 (DATE)")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    // price range
    @ApiModelProperty(value = "숙소 1박 당 최소 가격")
    @Range(message = "가격 값은 0 이상이어야 합니다.", min = 0)
    private Integer minPrice;

    @ApiModelProperty(value = "숙소 1박 당 최대 가격")
    @Range(message = "가격 값은 0 이상이어야 합니다.", min = 0)
    private Integer maxPrice;

    // number of guest
    @ApiModelProperty(value = "게스트 중 성인의 인원 수")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numAdult;

    @ApiModelProperty(value = "게스트 중 아이의 인원 수")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numChild;

    @ApiModelProperty(value = "게스트 중 유아의 인원 수")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numInfant;

}
