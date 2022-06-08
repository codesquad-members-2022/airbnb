package team18.airbnb.reservation.dto;

import java.time.LocalDate;

import lombok.Getter;
import team18.airbnb.domain.AccommodationAddress;
import team18.airbnb.domain.Reservation;

@Getter
public class UserReservationDto {

    private final LocalDate checkinTime;
    private final LocalDate checkoutTime;
    private final AccommodationAddress accommodationAddress;
    private final String accommodationName;
    private final int nAdult;
    private final int nChild;
    private final int nInfant;
    private final double totalAmountOfReservation;
    private final int totalGuest;

    public UserReservationDto(Reservation reservation) {
        this.checkinTime = reservation.getCheckinTime();
        this.checkoutTime = reservation.getCheckoutTime();
        this.accommodationAddress = reservation.getAccommodation().getAccommodationAddress();
        this.accommodationName = reservation.getAccommodation().getName();
        this.nAdult = reservation.getAdultCount();
        this.nChild = reservation.getChildCount();
        this.nInfant = reservation.getInfantCount();
        this.totalAmountOfReservation = reservation.getTotalAmountReservation();
        this.totalGuest = getNAdult() + getNChild() + getNInfant();
    }
}

