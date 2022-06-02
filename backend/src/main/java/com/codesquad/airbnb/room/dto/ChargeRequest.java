package com.codesquad.airbnb.room.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
@ToString
public class ChargeRequest {

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    private Integer numAdult;
    private Integer numChild;
    private Integer numInfant;

}
