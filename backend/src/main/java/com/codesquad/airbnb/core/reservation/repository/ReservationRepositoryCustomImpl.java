package com.codesquad.airbnb.core.reservation.repository;

import static com.codesquad.airbnb.core.reservation.QReservation.reservation;
import static com.codesquad.airbnb.core.room.entity.QRoom.room;

import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.reservation.Reservation;
import com.codesquad.airbnb.core.reservation.Reservation.ReservationState;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ReservationRepositoryCustomImpl implements ReservationRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<Reservation> existsOverlappedReservation(int roomId, StayDate stayDate) {
        return queryFactory.selectFrom(reservation)
            .leftJoin(reservation.room, room)
            .where(room.id.eq(roomId),
                reservation.state.eq(ReservationState.BOOKED),
                reservation.stayDate.checkinDate.loe(stayDate.getCheckinDate())
                    .and(reservation.stayDate.checkoutDate.gt(stayDate.getCheckinDate()))
                    .or(reservation.stayDate.checkinDate.gt(stayDate.getCheckoutDate())
                        .and(reservation.stayDate.checkoutDate.loe(stayDate.getCheckoutDate())))
                    .or(reservation.stayDate.checkinDate.goe(stayDate.getCheckinDate())
                        .and(reservation.stayDate.checkoutDate.loe(stayDate.getCheckoutDate()))))
            .fetch();
    }
}
