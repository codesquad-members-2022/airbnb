package team18.airbnb.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Long id;

    @Column(nullable = false)
    private LocalDateTime checkInTime;

    @Column(nullable = false)
    private LocalDateTime checkoutTime;

    @Column(nullable = false)
    private int adultCount;

    @Column(nullable = false)
    private int childCount;

    @Column(nullable = false)
    private int infantCount;

    @Column(nullable = false)
    private int maxPrice;

    @Column(nullable = false)
    private int minPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Embedded
    private ReservationFee reservationFee;

    public Reservation(LocalDateTime checkInTime,
                       LocalDateTime checkoutTime,
                       int adultCount,
                       int childCount,
                       int infantCount,
                       Accommodation accommodation,
                       ReservationFee reservationFee) {

        this.checkInTime = checkInTime;
        this.checkoutTime = checkoutTime;
        this.adultCount = adultCount;
        this.childCount = childCount;
        this.infantCount = infantCount;
        this.accommodation = accommodation;
        this.reservationFee = reservationFee;
    }
}
