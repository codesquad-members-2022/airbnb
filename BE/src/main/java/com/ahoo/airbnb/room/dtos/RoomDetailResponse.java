package com.ahoo.airbnb.room.dtos;

import com.ahoo.airbnb.entity.Address;
import com.ahoo.airbnb.member.MemberResponse;
import com.ahoo.airbnb.room.ImagesResponse;
import com.ahoo.airbnb.room.RoomCondition;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDetailResponse {

    private Long roomId;
    private String name;
    private String description;
    private Double averageRates;
    private Integer reviewCount;
    private Address address;
    private MemberResponse host;
    private RoomCondition roomCondition;
    private Integer charge;
    private ImagesResponse imagesResponse;
    private Long wishId;
}
