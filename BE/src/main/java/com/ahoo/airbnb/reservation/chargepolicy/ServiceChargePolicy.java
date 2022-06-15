package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import java.time.LocalDateTime;

public class ServiceChargePolicy implements ChargePolicy{

    private static final ServiceChargePolicy policy = new ServiceChargePolicy();

    private final double calculateRatio = 0.05;

    private ServiceChargePolicy() {

    }

    public static ServiceChargePolicy getInstance() {
        return policy;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * calculateRatio;
    }

    public static String displayName() {
        return "서비스 수수료";
    }
}
