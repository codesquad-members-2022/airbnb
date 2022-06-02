package com.codesquad.airbnb.reservation.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@AllArgsConstructor
public class ReservationRequest {

    private Integer memberId;
    private Integer roomId;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkIn;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOut;

    private Integer numberAdult;
    private Integer numberChild;
    private Integer numberInfant;

}
