package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.reservation.dto.ReservationListResponse;
import com.codesquad.airbnb.reservation.dto.ReservationRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Reservation API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @ApiOperation(value = "멤버의 예약 조회", notes = "멤버가 추가한 예약을 모두 조회한다.")
    @GetMapping
    public List<ReservationListResponse> listMemberReservations(
        @ApiParam(value = "멤버의 Id", required = true)
        @RequestParam("memberId") Integer memberId
    ) {
        return reservationService.listMemberReservations(memberId);
    }

    @ApiOperation(value = "예약 조회", notes = "특정 예약의 세부 사항을 조회한다.")
    @GetMapping("/{id}")
    public ReservationDetailResponse showReservation(
        @ApiParam(value = "예약의 Id", required = true)
        @PathVariable("id") Integer id
    ) {
        return reservationService.findReservation(id);
    }

    @ApiOperation(value = "예약 생성", notes = "날짜와 인원 정보를 바탕으로 예약을 진행한다.")
    @PostMapping
    public void createReservation(@RequestBody @Valid ReservationRequest request) {
        reservationService.makeReservation(
            request.getMemberId(),
            request.getRoomId(),
            new StayDate(
                request.getCheckIn(),
                request.getCheckOut()
            ),
            new GuestGroup(
                request.getNumberAdult(),
                request.getNumberChild(),
                request.getNumberInfant()
            )
        );
    }

    @ApiOperation(value = "예약 취소", notes = "멤버가 예약을 취소한다.")
    @DeleteMapping("/{id}")
    public void cancelReservation(
        @ApiParam(value = "예약의 Id", required = true)
        @PathVariable("id") Integer id
    ) {
        reservationService.cancelReservation(id);
    }
}
