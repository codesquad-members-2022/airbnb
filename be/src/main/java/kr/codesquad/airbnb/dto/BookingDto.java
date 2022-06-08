package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.Guest;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
public class BookingDto {

    private final Long id;
    private final Long roomId;
    private final String roomName;
    private final String roomImage;
    private final LocalDate checkIn;
    private final LocalDate checkOut;
    private final Guest guest;
    private final Integer totalPrice;
    private final LocalDateTime createdAt;

    public BookingDto(Booking booking) {
        id = booking.getId();
        roomId = booking.getRoom().getId();
        roomName = booking.getRoom().getName();
        roomImage = booking.getRoom().getImage();
        checkIn = booking.getCheckIn();
        checkOut = booking.getCheckOut();
        guest = booking.getGuest();
        totalPrice = booking.getTotalPrice();
        createdAt = booking.getCreatedAt();
    }
}
