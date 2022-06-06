package kr.codesquad.airbnb.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import kr.codesquad.airbnb.domain.Room;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.util.List;

@DataJpaTest
class RoomRepositoryTest {

    @Autowired
    private EntityManager em;
    private RoomQueryRepository roomQueryRepository;

    @BeforeEach
    public void init() {
        roomQueryRepository = new RoomQueryRepository(new JPAQueryFactory(em));
    }

    @Test
    @DisplayName("예약 가능한 숙소 조회")
    void findPossibleBookingRooms_test() {
        //given
        LocalDate checkIn = LocalDate.now();
        LocalDate checkOut = LocalDate.now().plusDays(1L);

        //when
        List<Room> possibleBookingRooms = roomQueryRepository.findPossibleBookingRooms(checkIn, checkOut);

        //then

    }
}
