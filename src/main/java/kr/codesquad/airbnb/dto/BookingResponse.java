package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Reservation;
import lombok.Getter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
public class BookingResponse {

    private Long id;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String name;
    private String country;
    private String city;
    private String town;
    private String village;
    private List<String> imageUrls;

    public BookingResponse(Reservation reservation) {
        this.id = reservation.getId();
        this.checkIn = reservation.getCheckIn();
        this.checkOut = reservation.getCheckOut();
        this.name = reservation.getLodging().getName();
        this.country = reservation.getLodging().getAddress().getCountry();
        this.city = reservation.getLodging().getAddress().getCity();
        this.town = reservation.getLodging().getAddress().getTown();
        this.imageUrls = initMainImageUrl(reservation);
    }

    private List<String> initMainImageUrl(Reservation reservation) {
        List<String> imageUrls = new ArrayList<>();
        for (Images image : reservation.getLodging().getImages()) {
            imageUrls.add(image.getImageUrl());
        }
        return this.imageUrls = imageUrls;
    }

}
