package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import java.time.LocalDateTime;

public class AccommodationTaxChargePolicy implements ChargePolicy {

    private static final AccommodationTaxChargePolicy instance = new AccommodationTaxChargePolicy();

    private final double calculateRatio = 0.005;

    private AccommodationTaxChargePolicy() {

    }

    public static AccommodationTaxChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * calculateRatio;
    }

    public static String displayName() {
        return "숙박세와 수수료";
    }
}
