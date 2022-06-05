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
    private Integer charge;
    private Integer totalCharge;
    private Double averageRates;
    private Integer reviewCount;
    private String mainImageUrl;
    private Long wishId;
    private String coordinate;

    public static RoomResponse from(Wish wish) {
        Room room = wish.getRoom();
        return new RoomResponse(
            room.getId(),
            room.getTitle(),
            room.getCharge(),
            null,
            room.getAverageRate(),
            room.getReviewCount(),
            room.getMainImageUrl().orElse(""),
            wish.getId(),
            room.getCoordinate().toStringWithComma()
        );
    }
}
