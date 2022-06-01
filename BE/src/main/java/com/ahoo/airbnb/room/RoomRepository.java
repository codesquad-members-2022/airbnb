package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoomRepository extends JpaRepository<Room, Long> {

//    @Query(value = "SELECT a.*, b.* FROM room a , room_charge_policy b WHERE a.id = ?0 AND a.id = b.room_id and b.is_active = true"
//    , nativeQuery = true)
//    @Query("SELECT r FROM Room r JOIN FETCH r.roomChargePolicies where r.id = ?1 and r.roomChargePolicies.")
//    Optional<Room> findByIdAndRoomChargePoliciesIsActiveIsTrue(Long id);

    @Query("select r from Room r "
        + "left outer join fetch RoomImage ri "
        + "on r.id = ri.room.id "
        + "left outer join fetch RoomChargePolicy rcp "
        + "on r.id = rcp.room.id "
        + "where r.id = ?1 "
        + "and rcp.chargePolicy.isActive = true ")
    Optional<Room> test(Long id);

//    @EntityGraph(attributePaths = "roomChargePolicies")
//    Optional<Room> findById(Long id);
}
