package com.codesquad.airbnb.reservation.repository;

import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.reservation.Reservation;
import java.util.List;

public interface ReservationRepositoryCustom {

    List<Reservation> findOverlappedReservations(int roomId, StayDate stayDate);

}
