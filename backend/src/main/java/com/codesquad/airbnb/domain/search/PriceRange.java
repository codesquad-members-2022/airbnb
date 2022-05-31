package com.codesquad.airbnb.domain.search;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PriceRange {

    private Integer min;
    private Integer max;

    public boolean isNull() {
        return min == null && max == null;
    }
}
