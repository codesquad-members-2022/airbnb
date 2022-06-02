package com.codesquad.airbnb.room.dto;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.ReviewStat;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.Room.RoomType;
import com.codesquad.airbnb.room.entity.RoomDetail;
import com.codesquad.airbnb.room.entity.RoomImage;
import com.codesquad.airbnb.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.room.entity.embeddable.RoomOption;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RoomDetailResponse {

    private String name;
    private String address;
    private String description;
    private RoomType type;
    private Integer price;
    private List<String> imagePaths;
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

    public static RoomDetailResponse from(Room room) {
        RoomDetail detail = room.getDetail();
        ReviewStat review = room.getReview();
        GuestGroup guestGroup = detail.getGuestGroup();
        RoomGroup roomGroup = detail.getRoomGroup();
        RoomOption roomOption = detail.getOption();
        List<String> imagePaths = room.getImages().stream()
            .map(RoomImage::getPath)
            .collect(Collectors.toList());

        return new RoomDetailResponse(
            room.getName(),
            room.getDistrict().getAddress(),
            room.getDescription(),
            room.getType(),
            room.getPrice().getLodging(),
            imagePaths,
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
