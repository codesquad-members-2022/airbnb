package com.codesquad.airbnb.core.charge;

import com.codesquad.airbnb.core.charge.discount.DiscountBill;
import com.codesquad.airbnb.core.charge.discount.DiscountPolicy;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.entity.Room;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ChargeManager {

    private static final double SERVICE_COMMISSION_RATE = 14.0;
    private static final double TAX_COMMISSION_RATE = 1.4;

    private final List<DiscountPolicy> discountPolicies;

    public ChargeBill createBill(Room room, StayDate stayDate, GuestGroup guestGroup) {
        Duration duration = Duration.between(
            stayDate.getCheckinDate().atStartOfDay(),
            stayDate.getCheckoutDate().atStartOfDay()
        );

        return new ChargeBill(
            (int) duration.toDays(),
            room.getPrice().getLodging(),
            room.getPrice().getCleaning(),
            getServiceCommission(room),
            getTaxCommission(room),
            createDiscounts(room, stayDate, guestGroup)
        );
    }

    private int getServiceCommission(Room room) {
        return (int) (room.getPrice().getLodging() * SERVICE_COMMISSION_RATE / 100);
    }

    private int getTaxCommission(Room room) {
        return (int) (room.getPrice().getLodging() * TAX_COMMISSION_RATE / 100);
    }

    private List<DiscountBill> createDiscounts(Room room, StayDate stayDate, GuestGroup guestGroup) {
        List<DiscountBill> discountBills = new ArrayList<>();

        for (DiscountPolicy policy : discountPolicies) {
            Optional<DiscountBill> bill = policy.execute(room, stayDate, guestGroup);
            bill.ifPresent(discountBills::add);
        }
        return discountBills;
    }

}
