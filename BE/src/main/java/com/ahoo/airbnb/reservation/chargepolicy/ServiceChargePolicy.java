package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import java.time.LocalDateTime;

public class ServiceChargePolicy implements ChargePolicy{

    private static final double calculateRatio = 0.05;
    private static ServiceChargePolicy instance = new ServiceChargePolicy();

    private ServiceChargePolicy() {

    }

    public static ServiceChargePolicy getInstance() {
        return instance;
    }

    @Override
    public double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount,
        Room room) {
        return room.getCharge() * calculateRatio;
    }
}
