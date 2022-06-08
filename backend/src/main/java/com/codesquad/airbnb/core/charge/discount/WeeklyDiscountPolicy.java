package com.codesquad.airbnb.core.charge.discount;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.entity.Room;
import java.time.Duration;
import java.util.Optional;

public class WeeklyDiscountPolicy implements DiscountPolicy {

    private static final int DAYS_OF_WEEK = 7;
    private static final int DISCOUNT_PERCENTAGE = 4;
    private static final String NAME = "주단위 요금 할인";

    @Override
    public boolean canExecute(StayDate stayDate, GuestGroup guestGroup) {
        Duration duration = Duration.between(
            stayDate.getCheckinDate().atStartOfDay(),
            stayDate.getCheckoutDate().atStartOfDay()
        );
        return duration.toDays() >= DAYS_OF_WEEK;
    }

    @Override
    public Optional<DiscountBill> execute(Room room, StayDate stayDate, GuestGroup guestGroup) {
        if (canExecute(stayDate, guestGroup)) {
            return Optional.empty();
        }

        Duration duration = Duration.between(
            stayDate.getCheckinDate().atStartOfDay(),
            stayDate.getCheckoutDate().atStartOfDay()
        );
        int lodgingPrice = room.getPrice().getLodging();

        DiscountBill bill = new DiscountBill(
            DISCOUNT_PERCENTAGE + "% " + NAME,
            (int) (lodgingPrice * duration.toDays() * DISCOUNT_PERCENTAGE / 100)
        );
        return Optional.of(bill);
    }
}
