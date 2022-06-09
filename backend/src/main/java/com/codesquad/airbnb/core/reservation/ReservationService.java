package com.codesquad.airbnb.core.reservation;

import com.codesquad.airbnb.core.charge.ChargeBill;
import com.codesquad.airbnb.core.charge.ChargeManager;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.member.Member;
import com.codesquad.airbnb.core.member.MemberRepository;
import com.codesquad.airbnb.core.reservation.Reservation.ReservationState;
import com.codesquad.airbnb.core.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.core.reservation.dto.ReservationListResponse;
import com.codesquad.airbnb.core.reservation.repository.ReservationRepository;
import com.codesquad.airbnb.core.room.entity.Room;
import com.codesquad.airbnb.core.room.repository.RoomRepository;
import com.codesquad.airbnb.exception.ErrorCode;
import com.codesquad.airbnb.exception.unchecked.NotAvailableException;
import com.codesquad.airbnb.exception.unchecked.NotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final MemberRepository memberRepository;
    private final RoomRepository roomRepository;
    private final ChargeManager chargeManager;

    public List<ReservationListResponse> listMemberReservations(int memberId) {
        List<Reservation> reservations = reservationRepository.findByMemberId(memberId);
        return reservations.stream()
            .map(ReservationListResponse::from)
            .collect(Collectors.toList());
    }

    public ReservationDetailResponse findReservation(int id) {
        Reservation reservation = reservationRepository.findByIdWithRoom(id)
            .orElseThrow(() -> new NotFoundException(ErrorCode.MEMBER_NOT_FOUND));

        return ReservationDetailResponse.from(reservation);
    }

    @Transactional
    public Reservation makeReservation(Integer memberId, Integer roomId, StayDate stayDate,
        GuestGroup guestGroup) {
        checkOverlappedReservation(roomId, stayDate);

        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.MEMBER_NOT_FOUND));

        Room room = roomRepository.findByIdWithDetail(roomId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.ROOM_NOT_FOUND));

        room.validateGuestGroup(guestGroup);

        ChargeBill bill = chargeManager.createBill(room, stayDate, guestGroup);

        return reservationRepository.save(
            new Reservation(member, room, bill.getTotalPrice(), guestGroup, stayDate,
                room.getStayTime(), ReservationState.BOOKED));
    }

    @Transactional
    public Reservation cancelReservation(Integer id) {
        Reservation reservation = reservationRepository.findById(id)
            .orElseThrow(() -> new NotFoundException(ErrorCode.RESERVATION_NOT_FOUND));

        reservation.cancel();
        return reservation;
    }

    private void checkOverlappedReservation(Integer roomId, StayDate stayDate) {
        List<Reservation> reservations = reservationRepository.existsOverlappedReservation(
            roomId, stayDate);

        if (reservations.size() > 0) {
            throw new NotAvailableException(ErrorCode.DATE_NOT_AVAILABLE);
        }
    }
}
