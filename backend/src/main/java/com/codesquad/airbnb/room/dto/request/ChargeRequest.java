package com.codesquad.airbnb.room.dto.request;

import io.swagger.annotations.ApiModelProperty;
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

    @ApiModelProperty(value = "체크인 날짜 (DATE)", required = true)
    @NotNull(message = "체크인 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @ApiModelProperty(value = "체크아웃 날짜 (DATE)", required = true)
    @NotNull(message = "체크아웃 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    @ApiModelProperty(value = "게스트 중 성인의 인원 수", required = true)
    @NotNull(message = "성인의 수가 입력되어야 합니다.")
    private Integer numAdult;

    @ApiModelProperty(value = "게스트 중 아이의 인원 수", required = true)
    @NotNull(message = "아이의 수가 입력되어야 합니다.")
    private Integer numChild;

    @ApiModelProperty(value = "게스트 중 유아의 인원 수", required = true)
    @NotNull(message = "유아의 수가 입력되어야 합니다.")
    private Integer numInfant;

}
