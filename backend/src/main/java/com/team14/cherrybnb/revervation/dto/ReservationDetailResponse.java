package com.team14.cherrybnb.revervation.dto;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.common.domain.Address;
import com.team14.cherrybnb.revervation.domain.Reservation;
import com.team14.cherrybnb.room.domain.RoomImage;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class ReservationDetailResponse {

    private Long reservationId;

    private List<RoomImage> roomImages;

    private Address address;

    private String name;

    private LocalDateTime checkIn;

    private LocalDateTime checkOut;

    private Member host;

    private BigDecimal totalPrice;

    private int guestCount;

    public ReservationDetailResponse(Reservation reservation) {
        this.reservationId = reservation.getId();
        this.roomImages = reservation.getRoom().getRoomImages();
        this.address = reservation.getRoom().getAddress();
        this.name = reservation.getRoom().getName();
        this.checkIn = reservation.getCheckIn();
        this.checkOut = reservation.getCheckOut();
        this.host = reservation.getRoom().getMember();
        this.totalPrice = reservation.getTotalPrice();
        this.guestCount = reservation.getGuestCount();
    }
}
