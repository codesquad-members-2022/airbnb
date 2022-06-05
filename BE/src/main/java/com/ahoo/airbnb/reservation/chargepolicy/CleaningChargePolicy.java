package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class CleaningChargePolicy implements ChargePolicy {

    private static final CleaningChargePolicy policy = new CleaningChargePolicy();

    private CleaningChargePolicy() {

    }

    public static CleaningChargePolicy getInstance() {
        return policy;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCleaningCharge() * DateUtils.getBetweenDays(checkIn, checkOut);
    }

    public static String displayName() {
        return "청소비";
    }
}
