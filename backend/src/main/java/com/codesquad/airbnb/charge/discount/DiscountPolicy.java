package com.codesquad.airbnb.charge.discount;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.room.entity.Room;

public interface DiscountPolicy {

    boolean canExecute(StayDate stayDate, GuestGroup guestGroup);

    DiscountBill execute(Room room, StayDate stayDate, GuestGroup guestGroup);

}
