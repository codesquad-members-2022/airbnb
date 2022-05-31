package com.codesquad.airbnb.wish;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WishRepository extends JpaRepository<Wish, Integer> {

    @Query("select w from Wish w"
        + " join fetch w.member"
        + " where w.id = :id")
    Optional<Wish> findByIdWithMember(@Param("id") Integer id);

    @Query("select w from Wish w"
        + " join fetch w.room"
        + " join fetch w.member m"
        + " where m.id = :memberId")
    List<Wish> findByMemberIdWIthRoomAndMember(@Param("memberId") Integer memberId);

}
