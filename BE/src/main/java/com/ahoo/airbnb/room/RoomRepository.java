package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("SELECT rcp.chargePolicy.chargePolicyType "
        + "FROM Room r "
        + "JOIN RoomChargePolicy rcp "
        + "ON r.id = rcp.room.id "
        + "WHERE r.id=:id "
        + "AND rcp.chargePolicy.isActive = true")
    List<ChargePolicyType> findActiveChargePolicyTypeById(@Param("id") Long id);
}
