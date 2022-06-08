package team18.airbnb.domain;

import javax.persistence.Embeddable;

import lombok.Getter;

@Embeddable
@Getter
public class AccommodationAddress {

    private String si;
    private String gun;
    private String gu;
    private String dong;
    private String eup;
}
