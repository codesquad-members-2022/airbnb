package com.codesquad.airbnb.core.room.dto.request;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class RoomSearCondition {

    private Location location;
    private Radius radius;
    private GuestGroup guestGroup;
    private PriceRange priceRange;
    private StayDate stayDate;

    @Getter
    public static class PriceRange {

        private final Integer min;
        private final Integer max;

        public PriceRange(Integer min, Integer max) {
            if (!isNull() && min > max) {
                throw new IllegalArgumentException("최소가격이 최대가격보다 클 수 없습니다.");
            }

            this.min = min;
            this.max = max;
        }

        public boolean isNull() {
            return Objects.isNull(min) || Objects.isNull(max);
        }

    }

    @Getter
    public static class Radius {

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

}
