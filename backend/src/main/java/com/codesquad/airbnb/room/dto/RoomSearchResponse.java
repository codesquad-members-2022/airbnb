package com.codesquad.airbnb.room.dto;

import com.codesquad.airbnb.domain.GuestGroup;
import com.codesquad.airbnb.domain.Location;
import com.codesquad.airbnb.domain.ReviewTotal;
import com.codesquad.airbnb.domain.RoomGroup;
import com.codesquad.airbnb.domain.RoomOption;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.Room.RoomType;
import com.codesquad.airbnb.room.entity.RoomDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RoomSearchResponse {

    private String name;
    private String address;
    private String imagePath;
    private RoomType type;
    private Double price;
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

    public RoomSearchResponse(Room room) {
        RoomDetail detail = room.getDetail();
        Location location = room.getLocation();
        ReviewTotal review = room.getReview();
        GuestGroup guestGroup = detail.getGuestGroup();
        RoomGroup roomGroup = detail.getRoomGroup();
        RoomOption roomOption = detail.getOption();

        this.name = room.getName();
        this.address = room.getDistrict().getAddress();
        this.imagePath = room.getImagePath();
        this.type = room.getType();
        this.price = room.getCharge().getLodging();
        this.longitude = location.getLongitude();
        this.latitude = location.getLatitude();
        this.reviewScore = review.getScore();
        this.reviewCount = review.getCount();
        this.numberAdult = guestGroup.getNumberAdult();
        this.numberChild = guestGroup.getNumberChild();
        this.numberInfant = guestGroup.getNumberInfant();
        this.numberBed = roomGroup.getNumberBed();
        this.numberBathroom = roomGroup.getNumberBathroom();
        this.kitchen = roomOption.getKitchen();
        this.hairDryer = roomOption.getHairDryer();
        this.wirelessInternet = roomOption.getWirelessInternet();
        this.airConditioner = roomOption.getAirConditioner();
    }

}
