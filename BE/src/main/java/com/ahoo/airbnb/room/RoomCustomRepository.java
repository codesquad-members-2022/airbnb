package com.ahoo.airbnb.room;

import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import java.util.List;
import org.springframework.data.repository.query.Param;

public interface RoomCustomRepository {

    List<ChargePolicyType> findActiveChargePolicyTypeById(@Param("id") Long id);
}
