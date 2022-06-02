package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.RoomPriceStatistic;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.repository.RoomRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RoomServiceTest {

    @Mock
    private RoomRepository roomRepository;

    @InjectMocks
    private RoomService roomService;

    @Test
    @DisplayName("숙박 가격 통계 데이터 조회 시 응답으로 보낼 데이터가 담긴 dto객체가 반환된다.")
    void findStatisticOfRoomPrice_test() {
        //given
        LocalDate checkIn = LocalDate.now();
        LocalDate checkOut = LocalDate.now().plusDays(1L);
        RoomPriceStatisticRequest roomPriceStatisticRequest = RoomPriceStatisticRequest.builder()
                .checkIn(checkIn)
                .checkOut(checkOut)
                .build();

        RoomPriceStatistic stubRoomPriceStatistic = getStubRoomPriceStatistic();

        when(roomRepository.findStatisticOfRoomPrice(checkIn, checkOut)).thenReturn(stubRoomPriceStatistic);

        //when
        RoomPriceStatisticDto statisticOfRoomPrice = roomService.findStatisticOfRoomPrice(roomPriceStatisticRequest);

        //then
        assertThat(statisticOfRoomPrice.getMinPricePerNight()).isEqualTo(10000);
        assertThat(statisticOfRoomPrice.getMaxPricePerNight()).isEqualTo(500000);
        assertThat(statisticOfRoomPrice.getAvgPricePerNight()).isEqualTo(133557);
        assertThat(statisticOfRoomPrice.getCountOfCategorizedPricePerNight()).isEqualTo(stubRoomPriceStatistic.getCountOfCategorizedPricePerNight());
    }

    private RoomPriceStatistic getStubRoomPriceStatistic() {
        RoomPriceStatistic roomPriceStatistic = new RoomPriceStatistic() {
            @Override
            public Integer getMinPricePerNight() {
                return 10000;
            }

            @Override
            public Integer getMaxPricePerNight() {
                return 500000;
            }

            @Override
            public Integer getAvgPricePerNight() {
                return 133557;
            }

            @Override
            public Integer get0to50000() {
                return 5;
            }

            @Override
            public Integer get50001to100000() {
                return 20;
            }

            @Override
            public Integer get100001to150000() {
                return 13;
            }

            @Override
            public Integer get150001to200000() {
                return 15;
            }

            @Override
            public Integer get200001to250000() {
                return 3;
            }

            @Override
            public Integer get250001to300000() {
                return 5;
            }

            @Override
            public Integer get300001to350000() {
                return 6;
            }

            @Override
            public Integer get350001to400000() {
                return 7;
            }

            @Override
            public Integer get400001to450000() {
                return 9;
            }

            @Override
            public Integer get450001to500000() {
                return 2;
            }

            @Override
            public Integer get500001to550000() {
                return 0;
            }

            @Override
            public Integer get550001to600000() {
                return 0;
            }

            @Override
            public Integer get600001to650000() {
                return 0;
            }

            @Override
            public Integer get650001to700000() {
                return 0;
            }

            @Override
            public Integer get700001to750000() {
                return 0;
            }

            @Override
            public Integer get750001to800000() {
                return 0;
            }

            @Override
            public Integer get800001to850000() {
                return 0;
            }

            @Override
            public Integer get850001to900000() {
                return 0;
            }

            @Override
            public Integer get900001to950000() {
                return 0;
            }

            @Override
            public Integer get950001to1000000() {
                return 0;
            }

            @Override
            public Integer get1000001to1050000() {
                return 0;
            }

            @Override
            public Integer get1050001to1100000() {
                return 0;
            }
        };

        return roomPriceStatistic;
    }
}
