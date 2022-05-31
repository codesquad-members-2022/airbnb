package com.codesquad.airbnb.room.entity.embeddable;

import java.time.LocalTime;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StayTime {

    private LocalTime checkinTime;
    private LocalTime checkoutTime;

}
