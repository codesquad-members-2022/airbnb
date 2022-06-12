package com.ahoo.airbnb.room.dtos;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.Wish;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RoomResponse {

    private Long roomId;
    private String name;
    private Integer chargePerDay;
    private Integer totalCharge;
    private Double averageRates;
    private Integer reviewCount;
    private String mainImageUrl;
    private Boolean isWish;
    private String coordinate;

    public static RoomResponse from(Wish wish) {
        Room room = wish.getRoom();
        return new RoomResponse(
            room.getId(),
            room.getTitle(),
            null,
            null,
            room.getAverageRate(),
            room.getReviewCount(),
            room.getMainImageUrl(),
            true,
            room.getCoordinate().toStringWithComma()
        );
    }

    public static RoomResponse of(Room room, Integer chargePerDay, Integer totalCharge, Boolean isWish) {
        return new RoomResponse(
            room.getId(),
            room.getTitle(),
            chargePerDay,
            totalCharge,
            room.getAverageRate(),
            room.getReviewCount(),
            room.getMainImageUrl(),
            isWish,
            room.getCoordinate().toStringWithComma()
        );
    }
}
