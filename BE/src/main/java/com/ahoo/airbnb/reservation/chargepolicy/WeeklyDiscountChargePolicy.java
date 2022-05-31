package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;
import java.time.Period;

public class WeeklyDiscountChargePolicy implements ChargePolicy {

    private static final int DAY_COUNT_OF_WEEK = 7;
    private double calculateRatio = -0.04;

    private static WeeklyDiscountChargePolicy instance = new WeeklyDiscountChargePolicy();

    private WeeklyDiscountChargePolicy() {

    }

    public static WeeklyDiscountChargePolicy getInstance() {
        return instance;
    }

    private int calculateWeekCount(LocalDateTime checkIn, LocalDateTime checkOut) {
        return DateUtils.getBetweenDays(checkIn, checkOut) / DAY_COUNT_OF_WEEK;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * calculateRatio * calculateWeekCount(checkIn, checkOut);
    }
}
