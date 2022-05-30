package com.team14.cherrybnb.room.domain;

import com.team14.cherrybnb.room.dto.SearchCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {



    @Query("select w from Wish w join fetch w.room where w.member = :memberId")
    List<Room> findAllByMemberId(Pageable pageable, Long memberId);

    @Query("select r from Room r join fetch r.roomImages " +
            "join fetch r.member " +
            "join fetch r.address " +
            "where r.id = :roomId")
    Optional<Room> findById(Long roomId);

}
