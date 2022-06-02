package com.codesquad.airbnb.district.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class DistrictResponse {

    private final String name;
    private final String imagePath;
    private final Integer minutes;

}
