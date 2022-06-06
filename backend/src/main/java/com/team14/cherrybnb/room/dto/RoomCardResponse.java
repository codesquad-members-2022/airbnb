package com.team14.cherrybnb.room.dto;

import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomImage;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class RoomCardResponse {

    private RoomImage roomImage;

    private Long roomId;

    private BigDecimal starRating;

    private int reviewCount;

    private String name;

    private BigDecimal pricePerDay;

    private BigDecimal totalPrice;

    private boolean checkWish;

    public RoomCardResponse(Room room, boolean checkWish) {
        this.roomImage = room.getRoomImages().get(0);
        this.roomId = room.getId();
        this.starRating = room.calculateRating();
        this.reviewCount = room.getReviewCount();
        this.name = room.getName();
        this.pricePerDay = room.calculateAveragePerDay();
        this.totalPrice = room.getTotalPrice();
        this.checkWish = checkWish;
    }
}
