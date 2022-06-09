package com.codesquad.airbnb.core.room.dto.request;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.domain.PriceRange;
import com.codesquad.airbnb.core.room.domain.Radius;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
public class RoomSearCondition {

    private final Location location;
    private final Radius radius;
    private final GuestGroup guestGroup;
    private final StayDate stayDate;
    private PriceRange priceRange;

}
