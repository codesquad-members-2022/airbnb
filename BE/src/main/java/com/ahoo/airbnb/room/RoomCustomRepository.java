package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import java.util.List;

public interface RoomCustomRepository {

    List<ChargePolicyType> findActiveChargePolicyTypeById(Long id);

    List<Room> findByAddressContainingAndHeadcountGreaterOrEqual(String address, Integer headcount);
}
