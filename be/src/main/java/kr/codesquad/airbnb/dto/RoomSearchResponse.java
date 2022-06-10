package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Location;
import kr.codesquad.airbnb.domain.RoomDiscountTaxDetail;
import lombok.Getter;

import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomSearchResponse {

    private final Long id;
    private final String name;
    private final String image;
    private final int maxNumberOfGuest;
    private final Double bedroom;
    private final Double bed;
    private final Double bathroom;
    private final List<String> roomAmenities = new ArrayList<>();
    private final Location location;
    private final List<RoomDiscountTaxDetail> discountTaxes = new ArrayList<>();
    private final int pricePerNight;
    private final int priceForNights;
    private int totalPrice;

    public RoomSearchResponse(RoomDto roomDto, RoomSearchRequest roomSearchRequest) {
        id = roomDto.getId();
        name = roomDto.getName();
        image = roomDto.getImage();
        maxNumberOfGuest = roomDto.getMaxNumberOfGuest();
        bedroom = roomDto.getBedroom();
        bed = roomDto.getBed();
        bathroom = roomDto.getBathroom();
        location = roomDto.getLocation();
        pricePerNight = roomDto.getPricePerNight();
        priceForNights = calculateCountOfIntervalBetweenDates(roomSearchRequest) * roomDto.getPricePerNight();

        addRoomAmenities(roomDto);
        addDiscountTaxes(roomDto, roomSearchRequest);
        totalPrice = calculateTotalPrice(priceForNights);
    }

    private void addDiscountTaxes(RoomDto roomDto, RoomSearchRequest roomSearchRequest) {
        int countOfIntervalBetweenDates = calculateCountOfIntervalBetweenDates(roomSearchRequest);
        int countOfWeekends = calculateCountOfWeekendsBetweenDates(roomSearchRequest);

        roomDto.getRoomDiscountTaxes().stream()
                .forEach(discountTax -> discountTaxes.add(new RoomDiscountTaxDetail(discountTax.getDiscountTax(), countOfIntervalBetweenDates, countOfWeekends, roomDto.getPricePerNight())));
    }

    private int calculateTotalPrice(int priceForNights) {
        return priceForNights += discountTaxes.stream()
                .mapToInt(RoomDiscountTaxDetail::getPrice).sum();
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

    private void addRoomAmenities(RoomDto roomDto) {
        roomDto.getRoomAmenities().stream()
                .forEach(roomAmenity -> getRoomAmenities().add(roomAmenity.getAmenity().getName()));
    }
}
