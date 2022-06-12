package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.config.TestConfig;
import kr.codesquad.airbnb.domain.Room;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.util.List;

@DataJpaTest
@Import(TestConfig.class)
class RoomRepositoryTest {

    @Autowired
    private EntityManager em;

    @Autowired
    private RoomRepository roomRepository;

    @Test
    @DisplayName("예약 가능한 숙소 조회")
    void findPossibleBookingRooms_test() {
        //given
        LocalDate checkIn = LocalDate.now();
        LocalDate checkOut = LocalDate.now().plusDays(1L);

        //when
        List<Room> possibleBookingRooms = roomRepository.findPossibleBookingRooms(checkIn, checkOut);

        //then

    }
}
