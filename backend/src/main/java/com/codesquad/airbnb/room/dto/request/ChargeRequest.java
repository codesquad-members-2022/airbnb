package com.codesquad.airbnb.room.dto.request;

import java.time.LocalDate;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
@ToString
public class ChargeRequest {

    @NotNull(message = "체크인 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @NotNull(message = "체크아웃 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    @NotNull(message = "성인의 수가 입력되어야 합니다.")
    private Integer numAdult;

    @NotNull(message = "아이의 수가 입력되어야 합니다.")
    private Integer numChild;

    @NotNull(message = "유아의 수가 입력되어야 합니다.")
    private Integer numInfant;

}
