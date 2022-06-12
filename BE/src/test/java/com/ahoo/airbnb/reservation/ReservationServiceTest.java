package com.ahoo.airbnb.reservation;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.mockito.BDDMockito.given;

import com.ahoo.airbnb.data.TestData;
import com.ahoo.airbnb.exception.ExceptionMessage;
import com.ahoo.airbnb.reservation.dtos.ChargesResponse;
import com.ahoo.airbnb.reservation.dtos.RoomChargeResponse;
import com.ahoo.airbnb.room.RoomRepository;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Stream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.transaction.annotation.Transactional;

@ExtendWith(MockitoExtension.class)
class ReservationServiceTest {

    @Mock
    RoomRepository roomRepository;

    @InjectMocks
    ReservationService reservationService;

    @Test
    @DisplayName("존재하는 roomId에 해당하는 숙소의 1박당 요금, 총 요금, 상세 요금 항목들을 계산하여 리턴한다.")
    @Transactional
    @ParameterizedTest
    @MethodSource("initTestData")
    void roomId에_해당하는_숙소의_요금계산_성공(LocalDateTime checkIn, LocalDateTime checkOut, int headcount) {
        // given
        Long roomId = 1L;
        LocalDateTime checkIn = DateUtils.stringToLocalDateTime("2022-02-02T10:15:30");
        LocalDateTime checkOut = DateUtils.stringToLocalDateTime("2022-02-10T10:15:30");
        int headcount = 1;

        RoomChargeResponse expected = RoomChargeResponse.of(
            53347,
            426778,
            new ChargesResponse(Map.of(
                "{1박당 평균 요금} * {숙박일수}", 386105,
                "숙박세와 수수료", 224,
                "4% 주 단위 요금 할인", -1795,
                "서비스 수수료", 2244,
                "청소비", 40000
            ))
        );
        given(roomRepository.findById(roomId)).willReturn(Optional.ofNullable(TestData.room));
        given(roomRepository.findActiveChargePolicyTypeById(roomId)).willReturn(TestData.chargePolicyTypes);

        // when
        RoomChargeResponse roomChargeResponse = reservationService.calculateRoomCharge(roomId, checkIn, checkOut, headcount);

        // then
        assertAll(
            () -> assertThat(roomChargeResponse.getChargePerDay()).isEqualTo(expected.getChargePerDay()),
            () -> assertThat(roomChargeResponse.getTotalCharge()).isEqualTo(expected.getTotalCharge()),
            () -> assertThat(roomChargeResponse.getChargesResponse().getCharges()).containsAllEntriesOf(expected.getChargesResponse().getCharges())
        );
    }

    @Test
    @DisplayName("존재하지 않는 roomId에 해당하는 숙소의 1박당 요금, 총 요금, 상세 요금 항목들을 계산하려고 시도하면 NoSuchElementException을 리턴한다.")
    @Transactional
    void roomId에_해당하는_숙소의_요금계산_실패() {
        // given
        Long roomId = 8L;
        LocalDateTime checkIn = DateUtils.stringToLocalDateTime("2022-02-02T10:15:30");
        LocalDateTime checkOut = DateUtils.stringToLocalDateTime("2022-02-10T10:15:30");
        int headcount = 1;

        given(roomRepository.findById(roomId)).willThrow(new NoSuchElementException(ExceptionMessage.NO_ROOM_ID));

        // when
        // then
        assertThatThrownBy(() -> reservationService.calculateRoomCharge(roomId, checkIn, checkOut, headcount))
            .isInstanceOf(NoSuchElementException.class)
            .hasMessage(ExceptionMessage.NO_ROOM_ID);
    }

    static Stream<Arguments> initTestData() {
        return Stream.of(
            Arguments.of(DateUtils.stringToLocalDateTime("2022-02-02T10:15:30"), DateUtils.stringToLocalDateTime("2022-02-10T10:15:30"), 1)
        );
    }
}
