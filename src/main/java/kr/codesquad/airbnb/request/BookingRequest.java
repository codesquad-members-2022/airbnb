package kr.codesquad.airbnb.request;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class BookingRequest {

    private LocalDate checkIn;
    private LocalDate checkOut;
    private int guests;
    private Long price;

    @Override
    public String toString() {
        return "BookingRequest{" +
                "checkIn=" + checkIn +
                ", checkOut=" + checkOut +
                ", guests=" + guests +
                ", price=" + price +
                '}';
    }
}
