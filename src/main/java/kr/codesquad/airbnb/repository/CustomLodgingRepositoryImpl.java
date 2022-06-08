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
import java.util.stream.Collectors;

import static kr.codesquad.airbnb.domain.QLodging.lodging;
import static kr.codesquad.airbnb.domain.QReservation.reservation;

@RequiredArgsConstructor
public class CustomLodgingRepositoryImpl implements CustomLodgingRepository {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Lodging> search(SearchLodgingRequest searchLodgingRequest) {
        return jpaQueryFactory
                .select(lodging)
                .from(lodging)
                .leftJoin(lodging.reservationList, reservation)
                .where(
                        checkAddress(searchLodgingRequest.getRegion()),
                        checkPrice(searchLodgingRequest.getMinPrice(), searchLodgingRequest.getMaxPrice()),
                        checkGuests(searchLodgingRequest.getGuests()),
                        checkInout(searchLodgingRequest.getCheckIn(), searchLodgingRequest.getCheckOut())
                ).fetch();
    }


    private BooleanExpression checkPrice(Long minPrice, Long maxPrice) {
        return ((minPrice != null) && (maxPrice != null)) ?
                lodging.price.loe(maxPrice).and(lodging.price.goe(minPrice)) : null;
    }

    private BooleanExpression checkGuests(Integer guests) {
        return guests == null ? null : lodging.maxGuest.goe(guests);
    }

    private BooleanExpression checkInout(LocalDate checkIn, LocalDate checkOut) {
        return ((checkIn != null) && (checkOut != null)) ?
                reservation.checkOut.loe(checkIn).or(reservation.checkIn.goe(checkOut)) : null;
    }

    private BooleanExpression checkAddress(String region) {
        return lodging.address.country.contains(region).or(
                lodging.address.city.contains(region).or(
                        lodging.address.town.contains(region).or(
                                lodging.address.village.contains(region))));
    }

}
