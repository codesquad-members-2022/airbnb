package com.ahoo.airbnb.reservation.chargepolicy;


import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class WeekdayChargePolicy implements ChargePolicy {

    private static final WeekdayChargePolicy instance = new WeekdayChargePolicy();

    private final double calculateRatio = 1;

    private WeekdayChargePolicy() {

    }

    public static WeekdayChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * DateUtils.getWeekdayCount(checkIn, checkOut) * calculateRatio;
    }
}
