package com.codesquad.airbnb.reservation.dto;

import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
public class ReservationRequest {

    @ApiModelProperty(value = "멤버의 Id", required = true)
    @NotNull(message = "멤버의 Id 가 입력되어야 합니다.")
    private Integer memberId;

    @ApiModelProperty(value = "숙소의 Id", required = true)
    @NotNull(message = "숙소의 Id가 입력되어야 합니다.")
    private Integer roomId;

    @ApiModelProperty(value = "체크인 날짜", required = true)
    @NotNull(message = "체크인 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @ApiModelProperty(value = "체크아웃 날짜", required = true)
    @NotNull(message = "체크아웃 날짜가 입력되어야 합니다.")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    @ApiModelProperty(value = "성인의 수", required = true)
    @NotNull(message = "성인의 수가 입력되어야 합니다.")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numberAdult;

    @ApiModelProperty(value = "아이의 수", required = true)
    @NotNull(message = "아이의 수가 입력되어야 합니다.")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numberChild;

    @ApiModelProperty(value = "유아의 수", required = true)
    @NotNull(message = "유아의 수가 입력되어야 합니다.")
    @Range(message = "인원은 0 명 이상이어야 합니다.", min = 0)
    private Integer numberInfant;

}
