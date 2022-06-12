package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRoomRequest {

    @NotNull(message = "roomId 가 입력되지 않았습니다.")
    @Positive(message = "유효하지 않은 roomId 입력 되었습니다.")
    private Long roomId;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "checkIn 날짜가 입력되지 않았습니다.")
//    @FutureOrPresent  checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
    private LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "checkOut 날짜가 입력되지 않았습니다.")
    private LocalDate checkOut;

    @NotNull(message = "성인 인원수가 입력되지 않았습니다.")
    @Min(value = 1, message = "최소 1명 이상의 성인이 입력되어야 합니다.")
    private Integer adults;

    @NotNull(message = "어린이 인원수가 입력되지 않았습니다.")
    @PositiveOrZero(message = "유효하지 않은 children 입력되었습니다.")
    private Integer children;

    @NotNull(message = "유아 인원수가 입력되지 않았습니다.")
    @PositiveOrZero(message = "유효하지 않은 infants 입력되었습니다.")
    private Integer infants;

    @NotNull(message = "숙박 요금이 입력되지 않았습니다.")
    @PositiveOrZero(message = "유효하지 않은 totalPrice 입력되었습니다.")
    private Integer totalPrice;
}
