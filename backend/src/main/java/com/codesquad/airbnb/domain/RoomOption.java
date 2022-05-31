package com.codesquad.airbnb.domain;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomOption {

    private Boolean kitchen;
    private Boolean hairDryer;
    private Boolean wirelessInternet;
    private Boolean airConditioner;

}
