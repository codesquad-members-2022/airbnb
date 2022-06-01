package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.FilteredRoomRequest;
import kr.codesquad.airbnb.response.CommonResponse;
import kr.codesquad.airbnb.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class RoomController {

    private final RoomService roomService;

    /**
     * 체크인, 체크아웃 날짜를 입력받고, 예약 가능한 숙소의 1박 요금 통계를 반환
     */
    @ResponseBody
    @GetMapping("/rooms/statistic/price")
    public CommonResponse viewRoomPriceStatistic(@ModelAttribute FilteredRoomRequest filteredRoomRequest) {

        return CommonResponse.okCommonResponse(roomService.findStatisticOfRoomPrice(filteredRoomRequest));
    }
}
