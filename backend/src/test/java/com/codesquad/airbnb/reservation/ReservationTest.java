package com.codesquad.airbnb.reservation;

import static org.assertj.core.api.Assertions.catchThrowable;
import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.common.embeddable.StayTime;
import com.codesquad.airbnb.exception.unchecked.NotAvailableException;
import com.codesquad.airbnb.reservation.Reservation.ReservationState;
import java.time.LocalDate;
import java.time.LocalTime;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ReservationTest {

    @Test
    @DisplayName("예약을 취소한다")
    public void reservationCancelTest() {
        // given
        Reservation reservation = new Reservation(
            null,
            null,
            67007,
            new GuestGroup(2, 1, 0),
            new StayDate(LocalDate.of(2022, 5, 31), LocalDate.of(2022, 6, 1)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0)),
            ReservationState.BOOKED
        );

        // when
        reservation.cancel();

        // then
        then(reservation.getState()).isEqualTo(ReservationState.CANCELED);
    }

    @Test
    @DisplayName("예약 취소/이용 완료 상태에서 취소할 경우 예외가 발생한다")
    public void reservationCancelFailTest() {
        // given
        Reservation reservation = new Reservation(
            null,
            null,
            67007,
            new GuestGroup(2, 1, 0),
            new StayDate(LocalDate.of(2022, 5, 31), LocalDate.of(2022, 6, 1)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0)),
            ReservationState.COMPLETED
        );

        // when
        Throwable throwable = catchThrowable(reservation::cancel);

        // then
        then(throwable).isInstanceOf(NotAvailableException.class)
            .hasMessage("예약된 상태가 아니므로 취소할 수 없습니다.");
    }

}
