package kr.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Builder
public class RoomPriceStatisticRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "checkIn 날짜가 입력되지 않았습니다.")
//    @FutureOrPresent  checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
    private final LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "checkOut 날짜가 입력되지 않았습니다.")
    private final LocalDate checkOut;
}
