package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.StayDate;
import java.util.List;

public interface ReservationRepositoryCustom {

    List<Reservation> findOverlappedReservations(int roomId, StayDate stayDate);

}
