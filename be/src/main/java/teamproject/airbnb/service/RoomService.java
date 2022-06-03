package teamproject.airbnb.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import teamproject.airbnb.api.RequestRoomSearchInfo;
import teamproject.airbnb.repository.RoomRepository;
import teamproject.airbnb.service.dto.RoomQuantityDto;
import teamproject.airbnb.service.dto.RoomSimpleInfoDto;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RoomService {

	private final RoomRepository roomRepository;

	public RoomQuantityDto loadQuantity(LocalDate checkIn) {

		return RoomQuantityDto.from(roomRepository.findAll().stream()
			.filter(r -> r.isReservationAvailable(checkIn))
			.collect(Collectors.toList()));
	}

	//request: 숙소 개수,체크인,체크아웃,요금 최소값,요금 최대값,게스트 수,어린이 수
	/// response: 숙소 개수,체크인,체크아웃,요금 최소값,요금 최대값,게스트 수,어린이 수
	//, (배열)roomDto{id,숙소이름,숙소설명,가구설명,평균평점,후기건수,가격,총액,찜 여부,주소,좌표}
	public List<RoomSimpleInfoDto> loadSimpleInfoList(RequestRoomSearchInfo requestRoomSearchInfo) {

		LocalDate checkIn = requestRoomSearchInfo.getCheckIn();
		LocalDate checkOut = requestRoomSearchInfo.getCheckOut();
		Long minimumPrice = requestRoomSearchInfo.getMinimumPrice();
		Long maximumPrice = requestRoomSearchInfo.getMaximumPrice();
		List<Long> wishList = requestRoomSearchInfo.getWishList();

		// 체크인으로 저장소에서 가져온 객체들을
		// 요금 간격에서 한번 더 거르고,
		// 주어진 정보로 값을 계산해서 dto 에 넘겨준다
		return roomRepository.findAll().stream()
			.filter(r -> r.isReservationAvailable(checkIn))
			.filter(r -> r.checkPrice(minimumPrice, maximumPrice))
			.map(r -> RoomSimpleInfoDto.from(r, checkIn, checkOut, wishList))
			.collect(Collectors.toList());
	}
}
