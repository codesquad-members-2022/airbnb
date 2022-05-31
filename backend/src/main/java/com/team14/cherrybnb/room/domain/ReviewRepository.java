package com.team14.cherrybnb.room.domain;

import com.team14.cherrybnb.room.dto.ReviewSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("select new com.team14.cherrybnb.room.dto.ReviewSummary(count(r.id), avg(r.starRating)) from Review r where r.room = :roomId")
    ReviewSummary getReviewSummaryByRoomId(Long roomId);
}
