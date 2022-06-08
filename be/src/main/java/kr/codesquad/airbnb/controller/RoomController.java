package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.dto.RoomSearchDto;
import kr.codesquad.airbnb.dto.RoomSearchRequest;
import kr.codesquad.airbnb.response.CommonResponse;
import kr.codesquad.airbnb.service.RoomService;
import kr.codesquad.airbnb.util.Validator;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class RoomController {

    private final RoomService roomService;

    /**
     * 체크인, 체크아웃 날짜를 입력받고, 예약 가능한 숙소의 1박 요금 통계를 반환
     */
    @GetMapping("/rooms/statistic/price")
    public CommonResponse viewRoomPriceStatistic(@ModelAttribute @Valid RoomPriceStatisticRequest roomPriceStatisticRequest) {
        Validator.validateCheckOutIsAfterCheckIn(roomPriceStatisticRequest.getCheckIn(), roomPriceStatisticRequest.getCheckOut());

        return CommonResponse.okCommonResponse(roomService.findStatisticOfRoomPrice(roomPriceStatisticRequest));
    }

    /**
     * 체크인, 체크아웃, 숙박료 최솟값, 숙박료 최댓값, 성인 인원수, 어린이 인원수, 유아 인원수, 좌상단 위도, 좌상단 경도, 우하단 위도, 우하단 경도
     * 요청으로 전달 된 파라미터 값에 따라 검색 조건을 분기하여 예약 가능한 숙소의 정보를 반환.
     * 필수 파라미터 값은 없다.
     */
    @GetMapping("/rooms")
    public CommonResponse findPossibleBookingRooms(@ModelAttribute RoomSearchRequest roomSearchRequest) {
        RoomSearchDto possibleBookingRooms = roomService.findPossibleBookingRooms(roomSearchRequest);
        if (possibleBookingRooms.getRooms().isEmpty()) {
            return CommonResponse.noContentCommonResponse();
        }

        return CommonResponse.okCommonResponse(possibleBookingRooms);
    }
}
