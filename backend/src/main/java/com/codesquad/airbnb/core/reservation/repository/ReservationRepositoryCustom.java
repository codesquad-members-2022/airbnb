package com.codesquad.airbnb.core.reservation.repository;

import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.reservation.Reservation;
import java.util.List;

public interface ReservationRepositoryCustom {

    List<Reservation> existsOverlappedReservation(int roomId, StayDate stayDate);

}
