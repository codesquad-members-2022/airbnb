package com.ahoo.airbnb.reservation.chargepolicy;

import com.ahoo.airbnb.entity.Room;
import java.time.LocalDateTime;

public interface ChargePolicy {

    double calculate(LocalDateTime checkIn, LocalDateTime checkOut, int headcount, Room room);
}
