package com.codesquad.airbnb.domain;

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

}
