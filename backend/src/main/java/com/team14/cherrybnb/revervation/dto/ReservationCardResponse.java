package com.team14.cherrybnb.revervation.dto;

import com.team14.cherrybnb.common.domain.Address;
import com.team14.cherrybnb.revervation.domain.Reservation;
import com.team14.cherrybnb.room.domain.RoomImage;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ReservationCardResponse {

    private Long reservationId;

    private LocalDateTime checkIn;

    private LocalDateTime checkOut;

    private Address address;

    private String name;

    private RoomImage roomImage;

    public ReservationCardResponse(Reservation reservation) {
        this.reservationId = reservation.getId();
        this.checkIn = reservation.getCheckIn();
        this.checkOut = reservation.getCheckOut();
        this.address = reservation.getRoom().getAddress();
        this.name = reservation.getRoom().getName();
        this.roomImage = reservation.getRoom().getRoomImages().get(0);
    }
}
