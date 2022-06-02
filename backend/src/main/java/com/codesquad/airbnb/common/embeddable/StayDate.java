package com.codesquad.airbnb.common.embeddable;

import java.time.LocalDate;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@Access(value = AccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StayDate {

    private LocalDate checkinDate;
    private LocalDate checkoutDate;

    public boolean isNull() {
        return checkinDate == null && checkoutDate == null;
    }

}
