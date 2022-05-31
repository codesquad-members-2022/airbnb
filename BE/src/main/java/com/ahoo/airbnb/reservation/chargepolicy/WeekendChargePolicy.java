package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class WeekendChargePolicy implements ChargePolicy {

    private double calculateRatio = 1.3;

    private static WeekendChargePolicy instance = new WeekendChargePolicy();

    private WeekendChargePolicy() {

    }

    public static WeekendChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount, Room room) {
        return room.getCharge() * DateUtils.getWeekendCount(checkIn, checkOut) * calculateRatio;
    }
}
