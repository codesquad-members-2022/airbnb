package com.codesquad.airbnb.room.entity.embeddable;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomGroup {

    private Integer numberTotalRoom;
    private Integer numberBedroom;
    private Integer numberBathroom;
    private Integer numberBed;

}
