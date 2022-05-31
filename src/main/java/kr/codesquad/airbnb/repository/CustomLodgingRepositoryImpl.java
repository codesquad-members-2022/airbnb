package kr.codesquad.airbnb.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.domain.QLodging;
import kr.codesquad.airbnb.request.SearchLodgingRequest;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import static kr.codesquad.airbnb.domain.QLodging.lodging;
import static kr.codesquad.airbnb.domain.QReservation.reservation;

@RequiredArgsConstructor
public class CustomLodgingRepositoryImpl implements CustomLodgingRepository{

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Lodging> search(SearchLodgingRequest searchLodgingRequest) {
        return jpaQueryFactory
                .select(lodging)
                .from(lodging)
                .leftJoin(lodging.reservationList)
                .where(
                        checkPrice(searchLodgingRequest.getMinPrice(), searchLodgingRequest.getMaxPrice()),
                        checkGuests(searchLodgingRequest.getGuests()),
                        lodging.id.notIn(
                                JPAExpressions
                                        .select(lodging.id)
                                        .from(lodging)
                                        .join(lodging.reservationList, reservation)
                                        .on(reservation.checkIn.between(searchLodgingRequest.getCheckIn(),searchLodgingRequest.getCheckOut())
                                                        .or(reservation.checkOut.between(searchLodgingRequest.getCheckIn(), searchLodgingRequest.getCheckOut()))
                                                        .or(reservation.checkIn.between(searchLodgingRequest.getCheckIn(), searchLodgingRequest.getCheckOut())
                                                                .and(reservation.checkOut.between(searchLodgingRequest.getCheckIn(), searchLodgingRequest.getCheckOut())))
                            )
                        )
                ).fetch();
    }


    private BooleanExpression checkPrice(Long minPrice, Long maxPrice) {
        return ((minPrice != null) && (maxPrice != null)) ?
                lodging.price.loe(maxPrice).and(lodging.price.goe(minPrice)) : null;
    }

    private BooleanExpression priceGoe(Long minPrice) {
        return minPrice == null ? null : lodging.price.goe(minPrice);
    }

    private BooleanExpression priceLoe(Long maxPrice) {
        return maxPrice == null ? null : lodging.price.loe(maxPrice);
    }

    private BooleanExpression checkGuests (Integer guests) {
        return guests == null ? null : lodging.maxGuest.goe(guests);
    }

    private BooleanExpression dateLoe (LocalDate checkIn) {
        return checkIn != null ? reservation.checkIn.loe(checkIn) : null;
    }

    private BooleanExpression dateGoe (LocalDate checkOut) {
        return checkOut != null ? reservation.checkOut.goe(checkOut) : null;
    }
}
