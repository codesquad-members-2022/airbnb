package com.codesquad.airbnb.room;

import com.codesquad.airbnb.room.entity.Room;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RoomRepository extends JpaRepository<Room, Integer>, RoomRepositoryCustom {

    @Query("select r from Room r"
        + " join fetch r.detail"
        + " join fetch r.district"
        + " join fetch r.images"
        + " where r.id = :id")
    Optional<Room> findByIdWithDetailAndDistrictAndImages(@Param("id") Integer id);

    @Query("select r from Room r"
        + " join fetch r.detail"
        + " where r.id = :id")
    Optional<Room> findByIdWithDetail(@Param("id") Integer id);

}
