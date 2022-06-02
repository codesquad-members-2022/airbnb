package com.codesquad.airbnb.common.embeddable;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@Access(AccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GuestGroup {

    private Integer numberAdult;
    private Integer numberChild;
    private Integer numberInfant;

    public boolean isNull() {
        return numberAdult == null && numberChild == null && numberInfant == null;
    }

    public int getNumberGuest() {
        return numberAdult + numberChild + numberInfant;
    }

    public void validateNumberGuest(GuestGroup guestGroup) {
        if (this.numberInfant < guestGroup.numberInfant
            || this.numberChild < guestGroup.numberChild
            || this.numberAdult < guestGroup.numberAdult) {
            throw new IllegalArgumentException("수용할 수 없는 인원입니다.");
        }
    }

}
