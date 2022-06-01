package com.team14.cherrybnb.revervation.domain;

import com.team14.cherrybnb.auth.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    /**
     * 로그인한 회원의 예약 리스트 조회하기 (ReservationState: 예약 완료)
     */
    @Query("select r from Reservation r join fetch r.member" +
            " join fetch r.room.roomImages join fetch r.room.address" +
            " where r.member = :member")
    Page<Reservation> findByMember(Pageable pageable, @Param("member")Member member);

    /**
     * 예약 취소하기
     */

    /**
     * 예약 상세 정보 보기
     */
    @Query("select r from Reservation r join fetch r.room where r.id = :id")
    Reservation findReservationDetailById(@Param("id") Long id);
}
