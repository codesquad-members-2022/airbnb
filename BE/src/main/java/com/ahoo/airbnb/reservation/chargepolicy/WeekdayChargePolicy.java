package com.ahoo.airbnb.reservation.chargepolicy;


import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class WeekdayChargePolicy implements ChargePolicy {

    private double calculateRatio = 1;

    private static WeekdayChargePolicy instance = new WeekdayChargePolicy();

    private WeekdayChargePolicy() {

    }

    public static WeekdayChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount, Room room) {
        return room.getCharge() * DateUtils.getWeekdayCount(checkIn, checkOut) * calculateRatio;
    }
}
