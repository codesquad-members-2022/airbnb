package team18.airbnb.domain;

import javax.persistence.*;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate checkinDate;

    @Column(nullable = false)
    private LocalDate checkoutDate;

    @Column(nullable = false)
    private int adultCount;

    @Column(nullable = false)
    private int childCount;

    @Column(nullable = false)
    private int infantCount;

    @Column(nullable = false)
    private double totalAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Reservation(LocalDate checkinDate,
                       LocalDate checkoutDate,
                       int adultCount,
                       int childCount,
                       int infantCount,
                       Accommodation accommodation
    ) {

        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.adultCount = adultCount;
        this.childCount = childCount;
        this.infantCount = infantCount;
        this.totalAmount =
                accommodation.getAccommodationFee().calculateTotalAmountOfDay(checkinDate, checkoutDate);
        this.accommodation = accommodation;
    }
}
