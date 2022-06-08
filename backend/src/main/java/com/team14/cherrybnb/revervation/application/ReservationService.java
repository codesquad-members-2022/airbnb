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
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public void bookRoom(Member loginMember, ReservationRequest reservationRequest) {
        Long roomId = reservationRequest.getRoomId();
        Room room = roomRepository.findById(roomId)
                .orElseThrow(RuntimeException::new);

        Reservation reservation = reservationRequest.toEntity(loginMember, room);
        reservationRepository.save(reservation);
    }

    @Transactional
    public void cancelReservation(Member loginMember, Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(RuntimeException::new);

        if (!loginMember.isSame(reservation.getMember())) {
            throw new RuntimeException();
        }

        reservation.cancel();
        reservationRepository.save(reservation);
    }

    @Transactional(readOnly = true)
    public Page<ReservationCardResponse> searchReservations(Pageable pageable, Member member) {
        Page<Reservation> reservations = reservationRepository.findByMember(pageable, member);

        List<ReservationCardResponse> cardResponses = reservations.getContent()
                .stream()
                .map(ReservationCardResponse::new)
                .collect(Collectors.toList());

        return new PageImpl<>(cardResponses, pageable, reservations.getTotalElements());
    }

    @Transactional(readOnly = true)
    public ReservationDetailResponse showReservationDetail(Long reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(RuntimeException::new);

        return new ReservationDetailResponse(reservation);
    }
}
