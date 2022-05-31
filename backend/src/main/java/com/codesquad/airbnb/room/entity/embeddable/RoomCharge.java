package com.codesquad.airbnb.room.entity.embeddable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomCharge {

    @Column(name = "lodging_charge")
    private Double lodging;

    @Column(name = "cleaning_charge")
    private Double cleaning;

}
