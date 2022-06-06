package com.team14.cherrybnb.room.domain;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team14.cherrybnb.room.dto.SearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static com.team14.cherrybnb.room.domain.QRoom.*;
import static com.team14.cherrybnb.revervation.domain.QReservation.*;

@RequiredArgsConstructor
public class RoomRepositoryImpl implements RoomRepositoryCustom {

    // 위치, 가격, 일정, 인원 수를 조건으로 해당하는 숙소 리스트 조회

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Page<Room> findBySearchCondition(SearchCondition searchCondition, Pageable pageable) {
        jpaQueryFactory
                .selectFrom(room)

                .leftJoin(reservation) // 일정
                .on(reservation.room.eq(room))
                .on(isReservable(searchCondition.getCheckIn(), searchCondition.getCheckOut()))

                .where(
                        betweenPrice(searchCondition.getMinPrice(), searchCondition.getMaxPrice()), // 가격
                        isAcceptableGuestCount(searchCondition.getGuestCount()) // 인원
                )
                .fetch();
        return null;
    }

    private BooleanExpression betweenPrice(BigDecimal gte, BigDecimal loe) {
        NumberPath<BigDecimal> n1 = room.roomPriceCondition.weekdayPrice;
        NumberPath<BigDecimal> n2 = room.roomPriceCondition.weekendPrice;
        return n1.add(n2).divide(2).between(gte, loe);
    }

    private BooleanExpression isAcceptableGuestCount(int guestCount) {
        return room.roomInfo.capacity.loe(guestCount);
    }

    private BooleanExpression isReservable(LocalDateTime checkIn, LocalDateTime checkOut) {
        return reservation.id.notIn(
                JPAExpressions
                        .select(reservation.id)
                        .from(reservation)
                        .where(
                                reservation.checkIn.goe(checkIn),
                                reservation.checkOut.loe(checkOut)
                        )
        );
    }
}
