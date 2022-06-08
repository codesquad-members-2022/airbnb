package kr.codesquad.airbnb.repository;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.QBooking;
import kr.codesquad.airbnb.domain.Room;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class CustomBookingRepositoryImpl implements CustomBookingRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QBooking booking = QBooking.booking;

    @Override
    public List<Booking> findAlreadyBookingByRoomAndDate(Room room, LocalDate checkIn, LocalDate checkOut) {
        return jpaQueryFactory.selectFrom(this.booking)
                .where(this.booking.room.eq(room)
                        .andAnyOf(checkInAndCheckOutIsBetweenBookingPeriod(checkIn, checkOut)))
                .fetch();
    }

    private Predicate checkInAndCheckOutIsBetweenBookingPeriod(LocalDate checkIn, LocalDate checkOut) {
        // 1. checkIn 날짜가 예약된 숙소의 기간 사이에 위치한다면 예약 불가능
        Predicate checkInIsBetweenBookingPeriod = ExpressionUtils.and(
                booking.checkIn.loe(checkIn),
                booking.checkOut.goe(checkIn)
        );
        // 2. checkOut 날짜가 예약된 숙소의 기간 사이에 위치한다면 예약 불가능
        Predicate checkOutIsBetweenBookingPeriod = ExpressionUtils.and(
                booking.checkIn.loe(checkOut),
                booking.checkOut.goe(checkOut)
        );
        // 3. checkIn 날짜가 예약된 숙소 기간보다 이전 And checkOut 날짜가 예약된 숙소 기간보다 이후라면 예약 불가능
        Predicate checkInIsBeforeBookingPeriodAndCheckOutIsAfterBookingPeriod = ExpressionUtils.and(
                booking.checkIn.after(checkIn),
                booking.checkOut.before(checkOut)
        );

        return ExpressionUtils.anyOf(checkInIsBetweenBookingPeriod, checkOutIsBetweenBookingPeriod, checkInIsBeforeBookingPeriodAndCheckOutIsAfterBookingPeriod);
    }
}
