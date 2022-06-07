package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.RoomAmenity;
import lombok.Getter;

@Getter
public class AmenityDto {

    private final String name;

    public AmenityDto(RoomAmenity roomAmenity) {
        name = roomAmenity.getAmenity().getName();
    }
}
