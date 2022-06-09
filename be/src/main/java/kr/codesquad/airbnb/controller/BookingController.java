package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.BookingRoomRequest;
import kr.codesquad.airbnb.response.CommonResponse;
import kr.codesquad.airbnb.service.BookingService;
import kr.codesquad.airbnb.util.Validator;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class BookingController {

    private final BookingService bookingService;

    /**
     * 요청에 필요한 파라미터들은 모두 필수값
     */
    @PostMapping("/booking/room")
    public CommonResponse bookingRoom(@RequestBody BookingRoomRequest bookingRoomRequest) {
        Validator.validateCheckOutIsAfterCheckIn(bookingRoomRequest.getCheckIn(), bookingRoomRequest.getCheckOut());

        return CommonResponse.okCommonResponse(bookingService.bookingRoom(bookingRoomRequest));
    }
}
