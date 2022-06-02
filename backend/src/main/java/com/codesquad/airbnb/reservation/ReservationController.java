package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.reservation.dto.ReservationListResponse;
import com.codesquad.airbnb.reservation.dto.ReservationRequest;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping
    public List<ReservationListResponse> listMemberReservations(
        @RequestParam("memberId") Integer memberId
    ) {
        return reservationService.listMemberReservations(memberId);
    }

    @GetMapping("/{id}")
    public ReservationDetailResponse showReservation(
        @PathVariable("id") Integer reservationId
    ) {
        return reservationService.findReservation(reservationId);
    }

    @PostMapping
    public void createReservation(@RequestBody ReservationRequest request) {
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

    @DeleteMapping("/{id}")
    public void cancelReservation(@PathVariable("id") Integer id) {
        reservationService.cancelReservation(id);
    }
}
