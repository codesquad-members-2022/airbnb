package kr.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Builder
public class FilteredRoomRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
//    @FutureOrPresent  checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
    private final LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull
    private final LocalDate checkOut;
}
