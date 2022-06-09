package com.codesquad.airbnb.core.room.domain;

import java.util.Objects;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Radius {

    private final Double horizontal;
    private final Double vertical;

    public Radius(Double horizontal, Double vertical) {
        this.horizontal = Objects.isNull(horizontal) ? 1.0 : horizontal;
        this.vertical = Objects.isNull(vertical) ? 1.0 : vertical;
    }

    public boolean isNull() {
        return Objects.isNull(horizontal) || Objects.isNull(vertical);
    }
}
