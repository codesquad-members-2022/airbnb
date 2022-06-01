package kr.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Builder
public class FilteredRoomRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")

    private final LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private final LocalDate checkOut;
}
