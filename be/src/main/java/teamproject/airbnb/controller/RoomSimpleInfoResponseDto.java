package teamproject.airbnb.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.service.RoomSimpleInfoDto;

@Data
@AllArgsConstructor
public class RoomSimpleInfoResponseDto {

	private LocalDate checkIn;
	private LocalDate checkOut;
	private int guestCount;
	private int kidCount;
	private long minimumPrice;
	private long maximumPrice;
	private List<RoomSimpleInfoDto> roomSimpleInfoDtos = new ArrayList<>();

	public static RoomSimpleInfoResponseDto of(List<RoomSimpleInfoDto> roomSimpleInfoDtos,
		RoomSearchInfoRequestDto roomSearchInfoRequestDto) {

		return new RoomSimpleInfoResponseDto(
			roomSearchInfoRequestDto.getCheckIn(),
			roomSearchInfoRequestDto.getCheckOut(),
			roomSearchInfoRequestDto.getGuestCount(),
			roomSearchInfoRequestDto.getKidCount(),
			roomSearchInfoRequestDto.getMinimumPrice(),
			roomSearchInfoRequestDto.getMaximumPrice(),
			roomSimpleInfoDtos);
	}
}
