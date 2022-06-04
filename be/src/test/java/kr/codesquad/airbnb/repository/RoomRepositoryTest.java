package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.dto.RoomPriceStatistic;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class RoomRepositoryTest {

    @Autowired
    private RoomRepository roomRepository;

    @Test
    @DisplayName("통계 조회가 제대로 이루어지는 지 확인")
    void findStatisticOfRoomPrice_test() {
        //given
        LocalDate checkIn = LocalDate.now();
        LocalDate checkOut = LocalDate.now().plusDays(1L);

        //when
        RoomPriceStatistic statisticOfRoomPrice = roomRepository.findStatisticOfRoomPrice(checkIn, checkOut);

        //then
        assertThat(statisticOfRoomPrice.getMinPricePerNight()).isNotNull();
        assertThat(statisticOfRoomPrice.getMaxPricePerNight()).isNotNull();
        assertThat(statisticOfRoomPrice.getAvgPricePerNight()).isNotNull();
        assertThat(statisticOfRoomPrice.getCountOfCategorizedPricePerNight().size()).isNotEqualTo(0);
    }
}
