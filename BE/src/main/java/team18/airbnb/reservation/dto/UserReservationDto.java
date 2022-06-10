package team18.airbnb.reservation.dto;

import java.time.LocalDate;

import lombok.Getter;
import team18.airbnb.domain.AccommodationAddress;
import team18.airbnb.domain.Reservation;

@Getter
public class UserReservationDto {

    private final LocalDate checkinDate;
    private final LocalDate checkoutDate;
    private final AccommodationAddress accommodationAddress;
    private final String accommodationName;
    private final int adultCount;
    private final int childCount;
    private final int infantCount;
    private final double totalAmount;
    private final int totalGuest;

    public UserReservationDto(Reservation reservation) {
        this.checkinDate = reservation.getCheckinDate();
        this.checkoutDate = reservation.getCheckoutDate();
        this.accommodationAddress = reservation.getAccommodation().getAccommodationAddress();
        this.accommodationName = reservation.getAccommodation().getName();
        this.adultCount = reservation.getAdultCount();
        this.childCount = reservation.getChildCount();
        this.infantCount = reservation.getInfantCount();
        this.totalAmount = reservation.getTotalAmount();
        this.totalGuest = getAdultCount() + getChildCount() + getInfantCount();
    }
}

