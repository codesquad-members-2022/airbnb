package com.team14.cherrybnb.revervation.domain;

import com.team14.cherrybnb.auth.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    /**
     * 로그인한 회원의 예약 리스트 조회하기 (ReservationState: 예약 완료)
     */
    @Query(value = "select distinct r from Reservation r" +
            " join fetch r.member m" +
            " join fetch r.room ro" +
            " join fetch ro.roomImages" +
            " join fetch ro.address" +
            " where r.member = :member",
    countQuery = "select count(r) from Reservation r where r.member = :member")
    Page<Reservation> findByMember(Pageable pageable, @Param("member") Member member);
}
