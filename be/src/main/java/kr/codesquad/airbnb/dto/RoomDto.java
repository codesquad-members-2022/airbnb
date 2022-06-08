package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Location;
import kr.codesquad.airbnb.domain.Room;
import lombok.Getter;

import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomDto {

    private final Long id;
    private final String name;
    private final String image;
    private final Integer maxNumberOfGuest;
    private final Double bedroom;
    private final Double bed;
    private final Double bathroom;
    private final List<String> roomAmenities = new ArrayList<>();
    private final Location location;
    private final List<DiscountTaxDto> discountTaxes = new ArrayList<>();
    private final Integer pricePerNight;
    private final Integer priceForNights;
    private int totalPrice;

    public RoomDto(Room room, RoomSearchRequest roomSearchRequest) {
        id = room.getId();
        name = room.getName();
        image = room.getImage();
        maxNumberOfGuest = room.getMaxNumberOfGuest();
        bedroom = room.getBedroom();
        bed = room.getBed();
        bathroom = room.getBathroom();
        location = room.getLocation();
        pricePerNight = room.getPricePerNight();
        priceForNights = calculateCountOfIntervalBetweenDates(roomSearchRequest) * room.getPricePerNight();

        addRoomAmenities(room);
        addDiscountTaxes(room, roomSearchRequest);
        setTotalPrice();
    }

    private void addDiscountTaxes(Room room, RoomSearchRequest roomSearchRequest) {
        int countOfIntervalBetweenDates = calculateCountOfIntervalBetweenDates(roomSearchRequest);
        int countOfWeekends = calculateCountOfWeekendsBetweenDates(roomSearchRequest);

        room.getRoomDiscountTaxes().stream()
                .forEach(discountTax -> discountTaxes.add(new DiscountTaxDto(discountTax, countOfIntervalBetweenDates, countOfWeekends, room.getPricePerNight())));
    }

    private void setTotalPrice() {
        totalPrice = priceForNights;
        discountTaxes.stream()
                .forEach(discountTaxDto -> totalPrice += discountTaxDto.getPrice());
    }

    private int calculateCountOfIntervalBetweenDates(RoomSearchRequest roomSearchRequest) {
        return (int) roomSearchRequest.getCheckIn().datesUntil(roomSearchRequest.getCheckOut())
                .count();
    }

    private int calculateCountOfWeekendsBetweenDates(RoomSearchRequest roomSearchRequest) {
        return (int) roomSearchRequest.getCheckIn().datesUntil(roomSearchRequest.getCheckOut())
                .filter(date -> date.getDayOfWeek() == DayOfWeek.SATURDAY || date.getDayOfWeek() == DayOfWeek.SUNDAY)
                .count();
    }

    private void addRoomAmenities(Room room) {
        room.getRoomAmenities().stream()
                .forEach(roomAmenity -> getRoomAmenities().add(roomAmenity.getAmenity().getName()));
    }
}
