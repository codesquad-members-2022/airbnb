package com.ahoo.airbnb.entity;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Coordinate {

    private double latitude;
    private double longitude;
}
