package com.codesquad.airbnb.room.entity;

import static org.assertj.core.api.BDDAssertions.catchThrowable;
import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayTime;
import com.codesquad.airbnb.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.room.entity.embeddable.RoomOption;
import java.time.LocalTime;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class RoomDetailTest {

    @Test
    @DisplayName("Adult 수가 제한 인원보다 많을 경우 예외가 발생한다")
    public void validateGuestGroupAdultFailTest() {
        // given
        RoomDetail roomDetail = new RoomDetail(
            null,
            new GuestGroup(2, 1, 0),
            new RoomGroup(2, 1, 1, 1),
            new RoomOption(true, true, true, true),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
        );

        // when
        Throwable throwable = catchThrowable(
            () -> roomDetail.validateGuestGroup(new GuestGroup(3, 1, 0)));

        // then
        then(throwable).isInstanceOf(IllegalArgumentException.class)
            .hasMessage("수용할 수 없는 인원입니다.");
    }

    @Test
    @DisplayName("Child 수가 제한 인원보다 많을 경우 예외가 발생한다")
    public void validateGuestGroupChildFailTest() {
        // given
        RoomDetail roomDetail = new RoomDetail(
            null,
            new GuestGroup(2, 1, 0),
            new RoomGroup(2, 1, 1, 1),
            new RoomOption(true, true, true, true),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
        );

        // when
        Throwable throwable = catchThrowable(
            () -> roomDetail.validateGuestGroup(new GuestGroup(2, 2, 0)));

        // then
        then(throwable).isInstanceOf(IllegalArgumentException.class)
            .hasMessage("수용할 수 없는 인원입니다.");
    }

    @Test
    @DisplayName("Infant 수가 제한 인원보다 많을 경우 예외가 발생한다")
    public void validateGuestGroupInfantFailTest() {
        // given
        RoomDetail roomDetail = new RoomDetail(
            null,
            new GuestGroup(2, 1, 0),
            new RoomGroup(2, 1, 1, 1),
            new RoomOption(true, true, true, true),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
        );

        // when
        Throwable throwable = catchThrowable(
            () -> roomDetail.validateGuestGroup(new GuestGroup(2, 1, 1)));

        // then
        then(throwable).isInstanceOf(IllegalArgumentException.class)
            .hasMessage("수용할 수 없는 인원입니다.");
    }
}
