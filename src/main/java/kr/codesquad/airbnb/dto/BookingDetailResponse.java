package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.PlaceType;
import kr.codesquad.airbnb.domain.Reservation;
import lombok.Getter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
public class BookingDetailResponse {

    private Long id;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String name;
    private String country;
    private String city;
    private String town;
    private Long price;
    private PlaceType placeType;
    private String hostName;
    private List<String> imageUrls;

    public BookingDetailResponse(Reservation reservation) {
        this.id = reservation.getId();
        this.checkIn = reservation.getCheckIn();
        this.checkOut = reservation.getCheckOut();
        this.name = reservation.getLodging().getName();
        this.country = reservation.getLodging().getAddress().getCountry();
        this.city = reservation.getLodging().getAddress().getCity();
        this.town = reservation.getLodging().getAddress().getTown();
        this.imageUrls = initMainImageUrl(reservation);
        this.price = reservation.getPrice();
        this.hostName = reservation.getLodging().getHostName();
        this.placeType = reservation.getLodging().getPlaceType();
    }

    private List<String> initMainImageUrl(Reservation reservation) {
        List<String> imageUrls = new ArrayList<>();
        for (Images image : reservation.getLodging().getImages()) {
            imageUrls.add(image.getImageUrl());
        }
        return this.imageUrls = imageUrls;
    }
}
