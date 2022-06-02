package team13.kuje.airbnb.service;

import java.time.LocalDateTime;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team13.kuje.airbnb.controller.model.RoomDetailDto;
import team13.kuje.airbnb.controller.model.RoomDetailPriceDto;
import team13.kuje.airbnb.domain.ReservationPeriod;
import team13.kuje.airbnb.domain.Room;
import team13.kuje.airbnb.repository.RoomsRepository;

@Service
@RequiredArgsConstructor
public class RoomsService {

	private final RoomsRepository roomsRepository;

	public RoomDetailDto findById(Long id, LocalDateTime checkIn, LocalDateTime checkOut,
		Integer adults,
		Integer children, Integer infants) {
		ReservationPeriod reservationPeriod = new ReservationPeriod(checkIn, checkOut);
		validateHeadCount(adults, children, infants);

		Optional<Room> findRoom = roomsRepository.findById(id);

		Room room = findRoom.orElseThrow(
			() -> new IllegalArgumentException("조회한 Room ID는 존재하지 않습니다."));

		room.calculatePrice(reservationPeriod);

		// dto 변환
		RoomDetailPriceDto roomDetailPriceDto = new RoomDetailPriceDto(room,
			adults + children);

		return new RoomDetailDto(room, roomDetailPriceDto); // TODO 수정해야함
	}

	private void validateHeadCount(Integer adults, Integer children, Integer infants) {
		if (adults == null) {
			throw new IllegalArgumentException("adults가 존재하지 않습니다.");
		}

		if (children == null) {
			children = 0;
		}

		if (infants == null) {
			infants = 0;
		}
	}

}
