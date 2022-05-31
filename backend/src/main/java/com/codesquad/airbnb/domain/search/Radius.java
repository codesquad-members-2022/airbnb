package com.codesquad.airbnb.domain.search;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Radius {

    private Double horizontal;
    private Double vertical;

    public boolean isNull() {
        return horizontal == null && vertical == null;
    }
}
