package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Location;
import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.repository.RoomQueryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RoomServiceTest {

    @Mock
    private RoomQueryRepository roomRepository;

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

        List<Room> stubRooms = getStubPossibleBookingRooms();

        when(roomRepository.findPossibleBookingRooms(checkIn, checkOut)).thenReturn(stubRooms);

        //when
        RoomPriceStatisticDto statisticOfRoomPrice = roomService.findStatisticOfRoomPrice(roomPriceStatisticRequest);

        //then
        assertThat(statisticOfRoomPrice.getMinPricePerNight()).isEqualTo(58929);
        assertThat(statisticOfRoomPrice.getMaxPricePerNight()).isEqualTo(158929);
        assertThat(statisticOfRoomPrice.getAvgPricePerNight()).isEqualTo(98929);
        assertThat(statisticOfRoomPrice.getCountOfCategorizedPricePerNight().get(0).getEndOfRange()).isEqualTo(59999);
        assertThat(statisticOfRoomPrice.getCountOfCategorizedPricePerNight().get(4).getEndOfRange()).isEqualTo(159999);
    }

    private List<Room> getStubPossibleBookingRooms() {
        List<Room> stubRooms = new ArrayList<>() {
            {
                add(new Room(1L, "서울 근교 이천시의 감성 힐링 숙소1", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 78929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(2L, "서울 근교 이천시의 감성 힐링 숙소2", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 88929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(3L, "서울 근교 이천시의 감성 힐링 숙소3", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 58929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(4L, "서울 근교 이천시의 감성 힐링 숙소4", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 108929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(5L, "서울 근교 이천시의 감성 힐링 숙소5", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 158929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
            }
        };

        return stubRooms;
    }
}
