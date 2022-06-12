package yanse.airbnb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yanse.airbnb.domain.image.repository.RoomImageRepository;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.reservation.repository.ReservationRepository;
import yanse.airbnb.web.dto.image.RoomImageDto;
import yanse.airbnb.web.dto.reservation.ReservationDetailDto;
import yanse.airbnb.web.dto.reservation.ReservationDto;

import java.util.List;
import java.util.stream.Collectors;

import yanse.airbnb.domain.member.Members;
import yanse.airbnb.domain.member.repository.MembersRepository;
import yanse.airbnb.domain.room.Room;
import yanse.airbnb.domain.room.repository.RoomRepository;
import yanse.airbnb.web.dto.reservation.RequestReservationDto;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ReservationService {

	private final ReservationRepository reservationRepository;

	private final RoomImageRepository roomImageRepository;

	private final RoomRepository roomRepository;

	private final MembersRepository membersRepository;

	public List<ReservationDto> findReservationList(Long id) {
		return reservationRepository.findAllByReservation(id)
			.stream()
			.map(ReservationDto::new)
			.collect(Collectors.toList());
	}

	public ReservationDetailDto findReservation(Long id) {
		Reservation reservation = reservationRepository.findById(id).orElseThrow(RuntimeException::new);
		List<RoomImageDto> images = roomImageRepository.findAllByRoomId(id)
			.stream()
			.map(RoomImageDto::new)
			.collect(Collectors.toList());
		return new ReservationDetailDto(reservation, images);
	}

	@Transactional
	public void reservation(Long roomId, RequestReservationDto requestReservationDto,
		String jwtToken) {
		Room findRoom = findRoom(roomId);
		Members findMember = findMember(jwtToken);

		Reservation reservation = findRoom.createReservation(findMember, requestReservationDto);
		reservationRepository.save(reservation);
	}

	private Members findMember(String jwtToken) {
		return membersRepository.findByJwtToken(jwtToken)
			.orElseThrow(RuntimeException::new);
	}

	private Room findRoom(Long roomId) {
		return roomRepository.findById(roomId)
			.orElseThrow(RuntimeException::new);
	}
}
