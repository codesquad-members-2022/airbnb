package team18.airbnb.domain;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.Getter;

@Embeddable
@Getter
public class AccommodationFee {

    // 1박 금액
    private int amountOfDay;

    // 일 수에 따른 총 금액
    private int totalAmountOfDay;

    // 청소비
    private int cleaningFee;

    // 서비스 수수료
    private int serviceFee;

    // 숙박세와 수수료
    private int roomCharge;

    // 총 예약 확정 금액
    private int totalAmountOfReservation;

    // 주 단위 요금 할인
    @Enumerated(EnumType.STRING)
    private DiscountPolicy discountPolicy;

    public double calculationTotalAmountOfDay(LocalDate checkinTime, LocalDate checkoutTime, Accommodation accommodation) {
        LocalDateTime checkin = checkinTime.atStartOfDay();
        LocalDateTime checkout = checkoutTime.atStartOfDay();

        Duration diff = Duration.between(checkin, checkout);
        long stayDays = diff.toDays();

        AccommodationFee accommodationFee = accommodation.getAccommodationFee();
        double discountPolicyOfWeek = DiscountPolicy.WEEK.getDiscountPolicy();

        int amountOfDay = accommodationFee.getAmountOfDay();
        int cleaningFee = accommodationFee.getCleaningFee();
        int serviceFee = accommodationFee.getServiceFee();
        int roomCharge = accommodationFee.getRoomCharge();

        return ((stayDays * amountOfDay) + (cleaningFee + serviceFee + roomCharge)) * discountPolicyOfWeek;
    }

}
