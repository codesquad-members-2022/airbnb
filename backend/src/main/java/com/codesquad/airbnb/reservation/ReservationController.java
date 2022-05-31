package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.reservation.dto.ReservationListResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
}
