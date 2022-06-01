package com.team14.cherrybnb.revervation.application;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.revervation.domain.Reservation;
import com.team14.cherrybnb.revervation.domain.ReservationRepository;
import com.team14.cherrybnb.revervation.dto.ReservationCardResponse;
import com.team14.cherrybnb.revervation.dto.ReservationDetailResponse;
import com.team14.cherrybnb.revervation.dto.ReservationRequest;
import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final RoomRepository roomRepository;

    public ReservationService(ReservationRepository reservationRepository,
                              RoomRepository roomRepository) {
        this.reservationRepository = reservationRepository;
        this.roomRepository = roomRepository;
    }

    public void bookRoom(Member member, ReservationRequest reservationRequest) {
        Long roomId = reservationRequest.getRoomId();
        Room room = roomRepository.findById(roomId)
                .orElseThrow(RuntimeException::new);

        Reservation reservation = reservationRequest.toEntity(member, room);
        reservationRepository.save(reservation);
    }

    public void cancelReservation(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(RuntimeException::new);

       reservation.cancel();
       reservationRepository.save(reservation);
    }

    public Page<ReservationCardResponse> searchReservations(Pageable pageable, Member member) {
        Page<Reservation> reservations = reservationRepository.findByMember(pageable, member);

        List<ReservationCardResponse> cardResponses = reservations.getContent()
                .stream()
                .map(ReservationCardResponse::new)
                .collect(Collectors.toList());

        return new PageImpl<>(cardResponses, pageable, reservations.getTotalElements());
    }

    public ReservationDetailResponse showReservationDetail(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(RuntimeException::new);

        return new ReservationDetailResponse(reservation);
    }
}
