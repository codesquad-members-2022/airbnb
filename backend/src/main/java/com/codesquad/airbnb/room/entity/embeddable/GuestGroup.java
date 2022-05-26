package com.codesquad.airbnb.room.entity.embeddable;

import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class GuestGroup {

    private Integer numberAdult;
    private Integer numberChild;
    private Integer numberInfant;

}
