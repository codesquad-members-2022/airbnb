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

    public ReservationDetailResponse findReservation(int id) {
        Reservation reservation = reservationRepository.findByIdWithRoom(id)
            .orElseThrow(() -> new IllegalStateException("예약 정보가 존재하지 않습니다."));

        return ReservationDetailResponse.from(reservation);
    }
}
