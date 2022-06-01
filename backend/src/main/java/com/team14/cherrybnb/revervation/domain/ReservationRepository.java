package com.team14.cherrybnb.revervation.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    /**
     * 로그인한 회원의 예약 리스트 조회하기 (ReservationState: 예약 완료)
     */
    @Query("select r from Reservation r join fetch r.member where r.member = :memberId")
    List<Reservation> findByMemberId(@Param("memberId") Long memberId);

    /**
     * 예약 취소하기
     */
    @Modifying
    @Query("update Reservation r set r.state = :state where r.id = :id")
    int deleteById(@Param("id") Long id, @Param("state") ReservationState state);

    /**
     * 예약 상세 정보 보기
     */
    @Query("select r from Reservation r join fetch r.room where r.id = :id")
    Reservation findReservationDetailById(@Param("id") Long id);
}
