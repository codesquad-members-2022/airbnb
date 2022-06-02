package com.codesquad.airbnb.room.dto.request;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.StayDate;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
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
            if (min != null && max != null && min > max) {
                throw new IllegalArgumentException("최소가격이 최대가격보다 클 수 없습니다.");
            }

            this.min = min;
            this.max = max;
        }

        public boolean isNull() {
            return min == null && max == null;
        }

    }

    @Getter
    @AllArgsConstructor
    public static class Radius {

        private Double horizontal;
        private Double vertical;

        public boolean isNull() {
            return horizontal == null && vertical == null;
        }
    }

}
