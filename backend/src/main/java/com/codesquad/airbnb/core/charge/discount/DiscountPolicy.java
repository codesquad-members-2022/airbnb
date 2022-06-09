package com.codesquad.airbnb.core.charge.discount;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.entity.Room;
import java.util.Optional;

public interface DiscountPolicy {

    boolean canExecute(StayDate stayDate, GuestGroup guestGroup);

    Optional<DiscountBill> execute(Room room, StayDate stayDate, GuestGroup guestGroup);

}
