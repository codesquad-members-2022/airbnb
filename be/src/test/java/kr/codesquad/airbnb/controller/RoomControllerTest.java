package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.domain.Location;
import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.service.RoomService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.Is.is;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(RoomController.class)
class RoomControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RoomService roomService;

    @Test
    @DisplayName("요청 시 필수 파라미터 값이 포함 되어야 한다.")
    void viewRoomPriceStatistic_check_parameter_test1() throws Exception {
        //given
        String now = LocalDate.now().toString();
        String blank = "";

        //when
        //then
        //checkIn 누락
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkOut", now).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
        //checkIn 빈 값
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", blank).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());

        //checkOut 누락
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", now).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
        //checkOut 빈 값
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkOut", blank).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("요청 시 checkIn, checkOut 은 형식을 맞추어 입력해야 한다.('yyyy-MM-dd')")
    void viewRoomPriceStatistic_check_parameter_test2() throws Exception {
        //given
        String correctDate = LocalDate.now().toString();
        String incorrectDate = LocalDate.now().toString().substring(0, correctDate.length() - 1);

        //when
        //then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", correctDate).param("checkOut", incorrectDate).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("요청 시 checkOut은 checkIn 날짜보다 이전 날짜일 수 없다.")
    void viewRoomPriceStatistic_check_parameter_test3() throws Exception {
        //given
        String checkIn = LocalDate.now().toString();
        String checkOut = LocalDate.now().minusDays(1L).toString();

        //when
        //then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", checkIn).param("checkOut", checkOut).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest());
    }

//    @Test    checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
//    @DisplayName("요청 시 checkIn 날짜는 현재보다 이전 날짜일 수 없다.")
//    void viewRoomPriceStatistic_check_parameter_test4() throws Exception {
//        //given
//        String yesterday = LocalDate.now().minusDays(1L).toString();
//        String now = LocalDate.now().toString();
//
//        //when
//        //then
//        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", yesterday).param("checkOut", now).contentType(MediaType.APPLICATION_JSON))
//                .andExpect(status().isBadRequest());
//    }

    @Test
    @DisplayName("요청 시 숙박 가격 통계 데이터가 반환된다.")
    void viewRoomPriceStatistic_test() throws Exception {
        //given
        RoomPriceStatisticDto stubRoomPriceStatisticDto = getStubRoomPriceStatisticDto();
        String checkIn = LocalDate.now().toString();
        String checkOut = LocalDate.now().plusDays(5L).toString();

        Mockito.when(roomService.findStatisticOfRoomPrice(any(RoomPriceStatisticRequest.class))).thenReturn(stubRoomPriceStatisticDto);

        //when
        //then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", checkIn).param("checkOut", checkOut).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.statusCode", is(200)))
                .andExpect(jsonPath("$.statusName", is("OK")))
                .andExpect(jsonPath("$.message", is("OK")))
                .andExpect(jsonPath("$.data.minPricePerNight", is(stubRoomPriceStatisticDto.getMinPricePerNight())))
                .andExpect(jsonPath("$.data.maxPricePerNight", is(stubRoomPriceStatisticDto.getMaxPricePerNight())))
                .andExpect(jsonPath("$.data.avgPricePerNight", is(stubRoomPriceStatisticDto.getAvgPricePerNight())))
                .andExpect(jsonPath("$.data.countOfCategorizedPricePerNight.*", hasSize(stubRoomPriceStatisticDto.getCountOfCategorizedPricePerNight().size())));
    }

    private RoomPriceStatisticDto getStubRoomPriceStatisticDto() {
        List<Room> stubRooms = new ArrayList<>() {
            {
                add(new Room(1L, "서울 근교 이천시의 감성 힐링 숙소1", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 78929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(2L, "서울 근교 이천시의 감성 힐링 숙소2", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 88929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(3L, "서울 근교 이천시의 감성 힐링 숙소3", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 58929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(4L, "서울 근교 이천시의 감성 힐링 숙소4", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 108929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
                add(new Room(5L, "서울 근교 이천시의 감성 힐링 숙소5", "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720", 158929, 2, 1.0, 1.0, 1.0, new Location("Sindun-myeon, Icheon-si, 경기도, 한국", 37.3062084, 127.4040411)));
            }
        };

        return new RoomPriceStatisticDto().of(stubRooms);
    }
}
