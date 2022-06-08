package com.codesquad.airbnb.core.room.dto.response;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.ReviewStat;
import com.codesquad.airbnb.core.room.entity.Room;
import com.codesquad.airbnb.core.room.entity.Room.RoomType;
import com.codesquad.airbnb.core.room.entity.RoomDetail;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomOption;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RoomSearchResponse {

    private Integer id;
    private String name;
    private String address;
    private String imagePath;
    private RoomType type;
    private Integer price;
    private Double longitude;
    private Double latitude;
    private Double reviewScore;
    private Integer reviewCount;
    private Integer numberAdult;
    private Integer numberChild;
    private Integer numberInfant;
    private Integer numberBed;
    private Integer numberBathroom;
    private Boolean kitchen;
    private Boolean hairDryer;
    private Boolean wirelessInternet;
    private Boolean airConditioner;

    public static RoomSearchResponse from(Room room) {
        RoomDetail detail = room.getDetail();
        Location location = room.getLocation();
        ReviewStat review = room.getReview();
        GuestGroup guestGroup = detail.getGuestGroup();
        RoomGroup roomGroup = detail.getRoomGroup();
        RoomOption roomOption = detail.getOption();

        return new RoomSearchResponse(
            room.getId(),
            room.getName(),
            room.getDistrict().getAddress(),
            room.getImagePath(),
            room.getType(),
            room.getPrice().getLodging(),
            location.getLongitude(),
            location.getLatitude(),
            review.getScore(),
            review.getCount(),
            guestGroup.getNumberAdult(),
            guestGroup.getNumberChild(),
            guestGroup.getNumberInfant(),
            roomGroup.getNumberBed(),
            roomGroup.getNumberBathroom(),
            roomOption.getKitchen(),
            roomOption.getHairDryer(),
            roomOption.getWirelessInternet(),
            roomOption.getAirConditioner()
        );
    }

}
