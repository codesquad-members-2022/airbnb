package com.codesquad.airbnb.room.dto;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.Location;
import java.time.LocalDate;
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
    @AllArgsConstructor
    public static class PriceRange {

        private Integer min;
        private Integer max;

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

    @Getter
    @AllArgsConstructor
    public static class StayDate {

        private LocalDate checkinDate;
        private LocalDate checkoutDate;

        public boolean isNull() {
            return checkinDate == null && checkoutDate == null;
        }

    }
}
