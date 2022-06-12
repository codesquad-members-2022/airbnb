package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.*;
import lombok.Getter;

import java.util.List;

@Getter
public class RoomDto {

    private final Long id;
    private final List<Booking> bookings;
    private final String name;
    private final String image;
    private final Integer pricePerNight;
    private final Integer maxNumberOfGuest;
    private final Double bedroom;
    private final Double bed;
    private final Double bathroom;
    private final List<RoomAmenity> roomAmenities;
    private final Location location;
    private final List<RoomDiscountTax> roomDiscountTaxes;

    public RoomDto(Room room) {
        id = room.getId();
        bookings = room.getBookings();
        name = room.getName();
        image = room.getImage();
        pricePerNight = room.getPricePerNight();
        maxNumberOfGuest = room.getMaxNumberOfGuest();
        bedroom = room.getBedroom();
        bed = room.getBed();
        bathroom = room.getBathroom();
        roomAmenities = room.getRoomAmenities();
        location = room.getLocation();
        roomDiscountTaxes = room.getRoomDiscountTaxes();
    }
}
