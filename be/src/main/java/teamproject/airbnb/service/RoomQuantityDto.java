package teamproject.airbnb.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.domain.Room;

@Data
@AllArgsConstructor
public class RoomQuantityDto {

	private long minimumPrice;
	private long maximumPrice;
	private List<Long> priceList;

	public static RoomQuantityDto from(List<Room> rooms) {

		// 가격을 기준으로 내림차순으로 정렬한 리스트
		List<Long> priceList = rooms.stream()
			.mapToLong(x -> x.getPrice())
			.sorted()
			.boxed()
			.collect(Collectors.toList());

		int maxCount = priceList.size() - 1;

		Long minimumPrice = priceList.get(0);
		Long maximumPrice = priceList.get(maxCount);

		return new RoomQuantityDto(
			minimumPrice,
			maximumPrice,
			priceList);
	}
}
