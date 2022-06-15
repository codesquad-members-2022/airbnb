package com.ahoo.airbnb.entity;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Coordinate {

    private Double latitude;
    private Double longitude;

    public String toStringWithComma() {
        return String.format("%6f, %6f", latitude, longitude);
    }
}
