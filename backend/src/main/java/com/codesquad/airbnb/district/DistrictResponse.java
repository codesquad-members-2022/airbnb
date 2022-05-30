package com.codesquad.airbnb.district;

import lombok.AllArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
public class DistrictResponse {

    private final String name;
    private final String imagePath;
    private final Double distance;

}
