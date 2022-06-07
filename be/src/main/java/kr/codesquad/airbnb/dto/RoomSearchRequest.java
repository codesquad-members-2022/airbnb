package kr.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Builder
public class RoomSearchRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private final LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private final LocalDate checkOut;

    private final Integer priceMin;
    private final Integer priceMax;
    private final Integer adults;
    private final Integer children;
    private final Integer infants;

    private final Double leftTopLatitude;
    private final Double leftTopLongitude;
    private final Double rightBottomLatitude;
    private final Double rightBottomLongitude;
}
