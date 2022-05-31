package com.codesquad.airbnb.room.dto;

import com.codesquad.airbnb.domain.GuestGroup;
import com.codesquad.airbnb.domain.Location;
import com.codesquad.airbnb.domain.StayPeriod;
import com.codesquad.airbnb.domain.search.PriceRange;
import com.codesquad.airbnb.domain.search.Radius;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RoomSearCondition {

    private Location location;
    private Radius radius;
    private GuestGroup guestGroup;
    private PriceRange priceRange;
    private StayPeriod stayPeriod;

}
