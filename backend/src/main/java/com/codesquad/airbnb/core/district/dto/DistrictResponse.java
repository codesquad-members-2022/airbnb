package com.codesquad.airbnb.core.district.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class DistrictResponse {

    private String name;
    private String imagePath;
    private Double longitude;
    private Double latitude;
    private Integer minutes;

}
