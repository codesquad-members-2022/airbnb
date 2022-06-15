package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class WeeklyDiscountChargePolicy implements ChargePolicy {

    private static final WeeklyDiscountChargePolicy policy = new WeeklyDiscountChargePolicy();

    private static final int dayCountOfWeek = 7;
    private static final double calculateRatio = -0.04;

    private WeeklyDiscountChargePolicy() {

    }

    public static WeeklyDiscountChargePolicy getInstance() {
        return policy;
    }

    private int calculateWeekCount(LocalDateTime checkIn, LocalDateTime checkOut) {
        return DateUtils.getBetweenDays(checkIn, checkOut) / dayCountOfWeek;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * calculateRatio * calculateWeekCount(checkIn, checkOut);
    }

    public static String displayName() {
        return (int)Math.abs(calculateRatio * 100) + "% 주 단위 요금 할인";
    }
}
