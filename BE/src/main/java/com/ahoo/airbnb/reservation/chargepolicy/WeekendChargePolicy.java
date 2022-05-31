package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class WeekendChargePolicy implements ChargePolicy {

    private static final WeekendChargePolicy instance = new WeekendChargePolicy();

    private final double calculateRatio = 1.3;

    private WeekendChargePolicy() {

    }

    public static WeekendChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * DateUtils.getWeekendCount(checkIn, checkOut) * calculateRatio;
    }
}
