package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.reservation.dto.ReservationListResponse;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public List<ReservationListResponse> listMemberReservations(int memberId) {
        List<Reservation> reservations = reservationRepository.findByMemberId(memberId);
        return reservations.stream()
            .map(ReservationListResponse::from)
            .collect(Collectors.toList());
    }

    public ReservationDetailResponse findReservation(int reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId);
        return ReservationDetailResponse.from(reservation);
    }
}
