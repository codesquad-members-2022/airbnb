package com.codesquad.airbnb.room.entity.embeddable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class RoomPrice {

    @Column(name = "lodging_price")
    private Integer lodging;

    @Column(name = "cleaning_price")
    private Integer cleaning;

}
