package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.member.MemberRepository;
import com.codesquad.airbnb.reservation.Reservation.ReservationState;
import com.codesquad.airbnb.reservation.dto.ReservationDetailResponse;
import com.codesquad.airbnb.reservation.dto.ReservationListResponse;
import com.codesquad.airbnb.reservation.repository.ReservationRepository;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.RoomDetail;
import com.codesquad.airbnb.room.repository.RoomRepository;
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

    @Transactional
    public Reservation makeReservation(Integer memberId, Integer roomId, GuestGroup guestGroup,
        StayDate stayDate) {
        // 해당 날짜에 숙소에 예약이 이미 있는지 확인
        validateStayDate(roomId, stayDate);

        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new IllegalStateException("멤버 정보가 존재하지 않습니다."));

        Room room = roomRepository.findByIdWithDetail(roomId)
            .orElseThrow(() -> new IllegalStateException("숙소 정보가 존재하지 않습니다."));

        RoomDetail detail = room.getDetail();
        detail.validateGuestGroup(guestGroup);

        return reservationRepository.save(
            new Reservation(member, room, room.getTotalCharge(),
                guestGroup, stayDate, detail.getStayTime(), ReservationState.BOOKED));
    }

    @Transactional
    public Reservation cancelReservation(Integer id) {
        Reservation reservation = reservationRepository.findById(id)
            .orElseThrow(() -> new IllegalStateException("예약 정보가 존재하지 않습니다."));

        reservation.cancel();
        return reservation;
    }

    private void validateStayDate(Integer roomId, StayDate stayDate) {
        List<Reservation> reservations = reservationRepository.findOverlappedReservations(
            roomId, stayDate);

        if (reservations.size() > 0) {
            throw new IllegalArgumentException("해당 날짜에 예약할 수 없습니다.");
        }
    }
}
