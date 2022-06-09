package com.codesquad.airbnb.core.room.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PriceRange {

    public final Integer min;
    public final Integer max;

    @JsonIgnore
    public boolean isNull() {
        return Objects.isNull(min) || Objects.isNull(max);
    }

    public Integer getMin() {
        return this.min;
    }

    public Integer getMax() {
        return this.max;
    }
}
