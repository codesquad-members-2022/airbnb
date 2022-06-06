package com.team14.cherrybnb.room.domain;

import com.team14.cherrybnb.auth.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WishRepository extends JpaRepository<Wish, Long> {

    /**
     * 로그인 회원의 위시 리스트 조회
     */
    @Query(value = "select w from Wish w join fetch w.room where w.member = :member",
            countQuery = "select count(w) from Wish w where w.member = :member")
    Page<Wish> findAllByMemberId(Pageable pageable, Member member);

    /**
     * 위시 리스트에 추가
     */

    /**
     * 위시 리스트에서 제거
     */
}
