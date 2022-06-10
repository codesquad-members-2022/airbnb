package team18.airbnb.domain;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.Getter;

@Embeddable
@Getter
public class AccommodationInfo {

    private int bedCount;
    private int bathCount;
    private int maxGuest;

    @Enumerated(EnumType.STRING)
    private AccommodationType accommodationType;

}
