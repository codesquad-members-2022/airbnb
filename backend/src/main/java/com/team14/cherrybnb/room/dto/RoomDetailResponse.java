package com.team14.cherrybnb.room.dto;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.common.domain.Address;
import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomImage;
import com.team14.cherrybnb.room.domain.RoomInfo;
import com.team14.cherrybnb.room.domain.RoomPriceCondition;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@AllArgsConstructor
public class RoomDetailResponse {

    private List<RoomImage> roomImages;

    private Long roomId;

    private String name;

    private BigDecimal starRating;

    private int reviewCount;

    private Address address;

    private Member host;

    private RoomInfo roomInfo;

    private String description;

    private RoomPriceCondition roomPriceCondition;

    private boolean checkWish;

    public RoomDetailResponse(Room room, boolean checkWish) {
        this.roomImages = room.getRoomImages();
        this.roomId = room.getId();
        this.name = room.getName();
        this.starRating = room.calculateRating();
        this.reviewCount = room.getReviewCount();
        this.address = room.getAddress();
        this.host = room.getMember();
        this.roomInfo = room.getRoomInfo();
        this.description = room.getDescription();
        this.roomPriceCondition = getRoomPriceCondition();
        this.checkWish = checkWish;
    }
}
