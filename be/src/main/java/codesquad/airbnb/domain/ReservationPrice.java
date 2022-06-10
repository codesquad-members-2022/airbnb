package codesquad.airbnb.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "reservation_price")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReservationPrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_price_id")
    private Long id;

    @OneToOne(mappedBy = "reservationPrice", fetch = FetchType.LAZY)
    private Reservation reservation;

    private Integer accommodationCost;
    private Integer discountAmount;
    private Integer cleaningFee;
    private Integer serviceFee;
    private Integer tax;
    private Integer totalPrice;

    private ReservationPrice(Integer accommodationCost, Integer discountAmount, Integer cleaningFee,
        Integer serviceFee, Integer tax, Integer totalPrice) {

        this.accommodationCost = accommodationCost;
        this.discountAmount = discountAmount;
        this.cleaningFee = cleaningFee;
        this.serviceFee = serviceFee;
        this.tax = tax;
        this.totalPrice = totalPrice;
    }

    public static ReservationPrice createReservationPrice(Integer accommodationCost, Integer discountAmount, Integer cleaningFee,
        Integer serviceFee, Integer tax, Integer totalPrice) {

        ReservationPrice reservationPrice = new ReservationPrice(
            accommodationCost, discountAmount, cleaningFee, serviceFee, tax, totalPrice
        );

        return reservationPrice;
    }
}
