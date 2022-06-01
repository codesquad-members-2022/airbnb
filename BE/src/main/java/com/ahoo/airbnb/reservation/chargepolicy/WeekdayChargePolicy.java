package com.ahoo.airbnb.reservation.chargepolicy;


import com.ahoo.airbnb.entity.Room;
import java.time.LocalDateTime;

public class WeekdayChargePolicy implements ChargePolicy {

    private static final WeekdayChargePolicy instance = new WeekdayChargePolicy();

    private final double weekdayCalculateRatio = 1;
    private final double weekendCalculateRatio = 1.3;

    private WeekdayChargePolicy() {

    }

    public static WeekdayChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        //평일수
        //주말수

//        return room.getCharge() * DateUtils.getWeekdayCount(checkIn, checkOut) * calculateRatio;
        return 0.9;
    }
}
