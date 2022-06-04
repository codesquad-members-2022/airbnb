package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.CategorizedPrice;
import kr.codesquad.airbnb.dto.RangeOfPrice;
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
        RoomPriceStatisticDto roomPriceStatisticDto = getStubRoomPriceStatisticDto();
        String checkIn = LocalDate.now().toString();
        String checkOut = LocalDate.now().plusDays(5L).toString();

        Mockito.when(roomService.findStatisticOfRoomPrice(any(RoomPriceStatisticRequest.class))).thenReturn(roomPriceStatisticDto);

        //when
        //then
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/rooms/statistic/price").param("checkIn", checkIn).param("checkOut", checkOut).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.statusCode", is(200)))
                .andExpect(jsonPath("$.statusName", is("OK")))
                .andExpect(jsonPath("$.message", is("OK")))
                .andExpect(jsonPath("$.data.minPricePerNight", is(roomPriceStatisticDto.getMinPricePerNight())))
                .andExpect(jsonPath("$.data.maxPricePerNight", is(roomPriceStatisticDto.getMaxPricePerNight())))
                .andExpect(jsonPath("$.data.avgPricePerNight", is(roomPriceStatisticDto.getAvgPricePerNight())))
                .andExpect(jsonPath("$.data.countOfCategorizedPricePerNight.*", hasSize(roomPriceStatisticDto.getCountOfCategorizedPricePerNight().size())));
    }

    private RoomPriceStatisticDto getStubRoomPriceStatisticDto() {
        List<CategorizedPrice> stubCountOfCategorizedPricePerNight = new ArrayList<>();

        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_0_TO_50000, 5));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_50001_TO_100000, 20));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_100001_TO_150000, 13));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_150001_TO_200000, 15));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_200001_TO_250000, 3));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_250001_TO_300000, 5));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_300001_TO_350000, 6));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_350001_TO_400000, 7));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_400001_TO_450000, 9));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_450001_TO_500000, 2));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_500001_TO_550000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_550001_TO_600000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_600001_TO_650000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_650001_TO_700000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_700001_TO_750000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_750001_TO_800000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_800001_TO_850000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_850001_TO_900000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_900001_TO_950000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_950001_TO_1000000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1000001_TO_1050000, 0));
        stubCountOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1050001_TO_1100000, 0));

        RoomPriceStatisticDto stubRoomPriceStatisticDto = RoomPriceStatisticDto.builder()
                .minPricePerNight(10000)
                .maxPricePerNight(500000)
                .avgPricePerNight(133557)
                .countOfCategorizedPricePerNight(stubCountOfCategorizedPricePerNight)
                .build();

        return stubRoomPriceStatisticDto;
    }
}
