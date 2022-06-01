package com.team14.cherrybnb.room.domain;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {

    /**
     * 로그인 회원의 위시 리스트 조회
     * @param pageable
     * @param memberId
     */
    @Query("select w from Wish w join fetch w.room where w.member = :memberId")
    List<Wish> findAllByMemberId(Pageable pageable, Long memberId);

    /**
     * 위시 리스트에 추가
     */

    /**
     * 위시 리스트에서 제거
     */
}
