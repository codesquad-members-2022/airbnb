package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("SELECT rcp.chargePolicy.chargePolicyType "
        + "FROM Room r "
        + "JOIN RoomChargePolicy rcp "
        + "ON r.id = rcp.room.id "
        + "WHERE r.id=:id "
        + "AND rcp.chargePolicy.isActive = true")
    List<ChargePolicyType> findActiveChargePolicyTypeById(Long id);

    @Query("SELECT r FROM Room r JOIN FETCH r.roomChargePolicies rcp JOIN FETCH rcp.chargePolicy WHERE r.id=:id AND rcp.chargePolicy.isActive=true")
    Optional<Room> findActiveRoomChargePoliciesById(Long id);
}
