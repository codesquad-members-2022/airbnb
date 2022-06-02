package com.codesquad.airbnb.member.dto;

import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.wish.Wish;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class WishResponse {

    private Integer roomId;
    private String name;
    private Integer price;
    private String imagePath;
    private Double reviewScore;
    private Integer reviewCount;
    private Boolean isSuperHost;

    public static WishResponse from(Wish wish) {
        Room room = wish.getRoom();

        return new WishResponse(
            room.getId(),
            room.getName(),
            room.getPrice().getLodging(),
            room.getImagePath(),
            room.getReview().getScore(),
            room.getReview().getCount(),
            wish.getMember().getIsSuperHost()
        );
    }

}
