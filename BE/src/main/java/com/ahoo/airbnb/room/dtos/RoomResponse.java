package com.ahoo.airbnb.room.dtos;

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
}
