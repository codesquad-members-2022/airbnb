package com.codesquad.airbnb.core.room.repository;

import static com.codesquad.airbnb.core.district.QDistrict.district;
import static com.codesquad.airbnb.core.reservation.QReservation.reservation;
import static com.codesquad.airbnb.core.room.entity.QRoom.room;
import static com.codesquad.airbnb.core.room.entity.QRoomDetail.roomDetail;

import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.reservation.Reservation.ReservationState;
import com.codesquad.airbnb.core.room.domain.LocationCluster;
import com.codesquad.airbnb.core.room.domain.PriceRange;
import com.codesquad.airbnb.core.room.domain.Radius;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.core.room.entity.Room;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class RoomRepositoryCustomImpl implements RoomRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Transactional(readOnly = true)
    public List<Room> searchWithCondition(RoomSearCondition condition) {
        JPAQuery<Room> query = queryFactory.selectFrom(room)
            .join(room.district, district)
            .fetchJoin()
            .join(room.detail, roomDetail)
            .fetchJoin()
            .where(locationContained(condition.getLocation(), condition.getRadius()),
                guestGroupGoe(condition.getGuestGroup()),
                priceBetween(condition.getPriceRange()))
            .distinct();

        return checkReservation(query, condition.getStayDate(), true).fetch();
    }

    public List<Integer> searchPriceWithCondition(RoomSearCondition condition) {
        JPAQuery<Integer> query = queryFactory.select(room.price.lodging).from(room)
            .where(locationContained(condition.getLocation(), condition.getRadius()),
                guestGroupGoe(condition.getGuestGroup()));

        return checkReservation(query, condition.getStayDate(), false).fetch();
    }

    private <T> JPAQuery<T> checkReservation(JPAQuery<T> query, StayDate stayDate, boolean detail) {
        if (stayDate.isNull()) {
            return query;
        }

        JPAQuery<T> joinQuery = query.leftJoin(room.reservations, reservation)
            .on(reservation.state.eq(ReservationState.BOOKED),
                reservation.stayDate.checkinDate.goe(stayDate.getCheckinDate())
                    .and(reservation.stayDate.checkinDate.lt(stayDate.getCheckoutDate()))
                    .or(reservation.stayDate.checkoutDate.gt(stayDate.getCheckinDate())
                        .and(reservation.stayDate.checkoutDate.loe(stayDate.getCheckoutDate())))
                    .or(reservation.stayDate.checkinDate.loe(stayDate.getCheckinDate())
                        .and(reservation.stayDate.checkoutDate.goe(stayDate.getCheckoutDate()))))
            .having(reservation.count().eq(0L));

        if (detail) {
            return joinQuery.groupBy(room.id, room.detail.id);
        }
        return joinQuery.groupBy(room.id);
    }

    private BooleanExpression locationContained(Location location, Radius radius) {
        if (location.isNull() || radius.isNull()) {
            return null;
        }

        LocationCluster locationCluster = LocationCluster.of(location, radius);

        return room.location.latitude.loe(locationCluster.getMaxLatitude())
            .and(room.location.latitude.goe(locationCluster.getMinLatitude()))
            .and(room.location.longitude.loe(locationCluster.getMaxLongitude()))
            .and(room.location.longitude.goe(locationCluster.getMinLongitude()));
    }

    private BooleanExpression guestGroupGoe(GuestGroup guestGroup) {
        if (guestGroup.isNull()) {
            return null;
        }

        return roomDetail.guestGroup.numberAdult.goe(guestGroup.getNumberAdult())
            .and(roomDetail.guestGroup.numberChild.goe(guestGroup.getNumberChild()))
            .and(roomDetail.guestGroup.numberInfant.goe(guestGroup.getNumberInfant()));
    }

    private BooleanExpression priceBetween(PriceRange priceRange) {
        if (priceRange.isNull()) {
            return null;
        }

        return room.price.lodging.between(priceRange.getMin(), priceRange.getMax());
    }

}
