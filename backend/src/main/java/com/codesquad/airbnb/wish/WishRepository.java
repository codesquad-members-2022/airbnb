package com.codesquad.airbnb.wish;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WishRepository extends JpaRepository<Wish, Integer> {

    @Query("select w from Wish w"
        + " join fetch w.room"
        + " join fetch w.member"
        + " where w.id = :id")
    List<Wish> findByIdWIthRoomAndMember(@Param("id") Integer id);

}
