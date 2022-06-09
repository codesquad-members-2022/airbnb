package kr.codesquad.airbnb.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import kr.codesquad.airbnb.request.BookingRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    private Members members;

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    private Lodging lodging;

    private LocalDate checkIn;
    private LocalDate checkOut;
    private Long price;
    private int guests;
    private boolean canceled;

    public Reservation(Members member, Lodging lodging, BookingRequest request) {
        this.members = member;
        this.lodging = lodging;
        this.checkIn = request.getCheckIn();
        this.checkOut = request.getCheckOut();
        this.guests = request.getGuests();
        this.price = request.getPrice();
        this.canceled = false;
    }
}
