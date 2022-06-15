package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;

public class AccommodationChargePolicy implements ChargePolicy {

    private static final AccommodationChargePolicy policy = new AccommodationChargePolicy();

    private final double weekdayCalculateRatio = 1;
    private final double weekendCalculateRatio = 1.3;

    private AccommodationChargePolicy() {

    }

    public static AccommodationChargePolicy getInstance() {
        return policy;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount, Room room) {
        return room.getCharge() * DateUtils.getWeekdayCount(checkIn, checkOut) * weekdayCalculateRatio
            + room.getCharge() * DateUtils.getWeekendCount(checkIn, checkOut) * weekendCalculateRatio;
    }

    public static String displayName() {
        return "{1박당 평균 요금} * {숙박일수}";
    }
}
