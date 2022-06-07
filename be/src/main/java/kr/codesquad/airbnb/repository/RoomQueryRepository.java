package kr.codesquad.airbnb.repository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.codesquad.airbnb.domain.QBooking;
import kr.codesquad.airbnb.domain.QRoom;
import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomSearchRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RoomQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QRoom room = QRoom.room;
    private final QBooking booking = QBooking.booking;

    public List<Room> findPossibleBookingRooms(LocalDate checkIn, LocalDate checkOut) {
        return jpaQueryFactory.selectFrom(room)
                .leftJoin(room.bookings, booking)
                .where(booking.isNull()
                        .orAllOf(checkInAndCheckOutIsNotBetweenBookingPeriod(checkIn, checkOut)))
                .fetch();
    }

    /**
     * booking(예약) 테이블에서 checkIn, checkOut 기준으로 이미 예약이 완료되어 예약 불가능한 숙소 찾기
     * 이미 검증 된 전제 : checkIn == checkOut 일 수는 있지만, checkIn > checkOut 일 수는 없다.
     */
    private Predicate checkInAndCheckOutIsNotBetweenBookingPeriod(LocalDate checkIn, LocalDate checkOut) {
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

        return ExpressionUtils.anyOf(checkInIsBetweenBookingPeriod, checkOutIsBetweenBookingPeriod, checkInIsBeforeBookingPeriodAndCheckOutIsAfterBookingPeriod)
                .not(); // [checkIn ~ checkOut]이 BookingPeriod와 겹치는 기간의 반대는, 예약 가능한 날짜
    }

    public List<Room> findPossibleBookingRooms(RoomSearchRequest roomSearchRequest) {
        return jpaQueryFactory.selectFrom(room)
                .leftJoin(room.bookings, booking).fetchJoin()
                .where(checkSearchParameter(roomSearchRequest))
                .fetch();
    }

    private BooleanBuilder checkSearchParameter(RoomSearchRequest roomSearchRequest) {
        BooleanBuilder builder = new BooleanBuilder();
        int maxNumberOfGuest = 0;

        if (roomSearchRequest.getCheckIn() != null && roomSearchRequest.getCheckOut() != null) {
            builder.or(booking.isNull());
            builder.orAllOf(checkInAndCheckOutIsNotBetweenBookingPeriod(roomSearchRequest.getCheckIn(), roomSearchRequest.getCheckOut()));
        }
        if (roomSearchRequest.getPriceMin() != null) {
            builder.and(room.pricePerNight.goe(roomSearchRequest.getPriceMin()));
        }
        if (roomSearchRequest.getPriceMax() != null) {
            builder.and(room.pricePerNight.loe(roomSearchRequest.getPriceMax()));
        }

        if (roomSearchRequest.getAdults() != null) {
            maxNumberOfGuest += roomSearchRequest.getAdults();
        }
        if (roomSearchRequest.getChildren() != null) {
            maxNumberOfGuest += roomSearchRequest.getChildren();
        }
        if (roomSearchRequest.getInfants() != null) {
            maxNumberOfGuest += roomSearchRequest.getInfants();
        }
        if (maxNumberOfGuest != 0) {
            builder.and(room.maxNumberOfGuest.goe(maxNumberOfGuest));
        }

        if (roomSearchRequest.getLeftTopLatitude() != null && roomSearchRequest.getLeftTopLongitude() != null
                && roomSearchRequest.getRightBottomLatitude() != null && roomSearchRequest.getRightBottomLongitude() != null) {
            builder.and(room.location.latitude.between(roomSearchRequest.getLeftTopLatitude(), roomSearchRequest.getRightBottomLatitude()));
            builder.and(room.location.longitude.between(roomSearchRequest.getLeftTopLongitude(), roomSearchRequest.getRightBottomLongitude()));
        }

        return builder;
    }
}
