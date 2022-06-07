package com.team14.cherrybnb.room.domain;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team14.cherrybnb.revervation.domain.QReservation;
import com.team14.cherrybnb.room.dto.SearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import static com.team14.cherrybnb.room.domain.QRoom.*;
import static com.team14.cherrybnb.revervation.domain.QReservation.*;

@Repository
@RequiredArgsConstructor
public class RoomRepositoryImpl implements RoomRepositoryCustom {

    // 위치, 가격, 일정, 인원 수를 조건으로 해당하는 숙소 리스트 조회

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Page<Room> findBySearchCondition(SearchCondition searchCondition, Pageable pageable) {
        List<Room> rooms = jpaQueryFactory
                .selectFrom(room)

                .leftJoin(reservation) // 일정
                .on(reservation.room.eq(room))

                .where(
                        isReservable(searchCondition.getCheckIn(), searchCondition.getCheckOut()),
                        betweenPrice(searchCondition.getMinPrice(), searchCondition.getMaxPrice()), // 가격
                        isAcceptableGuestCount(searchCondition.getGuestCount()) // 인원
                )
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        return new PageImpl<>(rooms, pageable, 10);
    }

    private BooleanExpression betweenPrice(BigDecimal gte, BigDecimal loe) {
        if (gte == null || loe == null) {
            return null;
        }

        NumberPath<BigDecimal> n1 = room.roomPriceCondition.weekdayPrice;
        NumberPath<BigDecimal> n2 = room.roomPriceCondition.weekendPrice;
        return n1.add(n2).divide(2).between(gte, loe);
    }

    private BooleanExpression isAcceptableGuestCount(Integer guestCount) {
        if (guestCount == null) {
            return null;
        }

        return room.roomInfo.capacity.loe(guestCount);
    }

    private BooleanExpression isReservable(LocalDateTime checkIn, LocalDateTime checkOut) {
        if (checkIn == null || checkOut == null) {
            return null;
        }

        QReservation qReservation = new QReservation("qReservation");

        return reservation.id.in(
                JPAExpressions
                        .select(qReservation.id)
                        .from(qReservation)
                        .where(
                                qReservation.checkIn.gt(checkOut).or(qReservation.checkOut.lt(checkIn))
                        )
        );
    }
}
