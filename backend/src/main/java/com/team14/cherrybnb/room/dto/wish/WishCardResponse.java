package com.team14.cherrybnb.room.dto.wish;

import com.team14.cherrybnb.room.domain.Wish;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
public class WishCardResponse {

    private BigDecimal starRating;

    private int reviewCount;

    private String roomName;

    private BigDecimal pricePerDay;

    public WishCardResponse(Wish wish) {
        this.starRating = new BigDecimal(5);
        this.reviewCount = wish.getRoom().getReviews().size();
        this.roomName = wish.getRoom().getName();
        this.pricePerDay = wish.getRoom().getRoomPriceCondition().calculateAvgPricePerDay();
    }
}
