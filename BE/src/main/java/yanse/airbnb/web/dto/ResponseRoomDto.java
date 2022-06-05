package yanse.airbnb.web.dto;

import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.domain.image.RoomImage;
import yanse.airbnb.domain.room.Room;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseRoomDto {

	private Long roomId;

	private List<String> imageUrl;

	private double rating;

	private int reviewCount;

	private String roomName;

	private int price;

	private int totalPrice;

	public ResponseRoomDto(Room room, int days) {
		roomId = room.getId();
		imageUrl = room.getRoomImage().stream()
			.map(RoomImage::getUrl)
			.collect(Collectors.toList());
		rating = room.getRating();
		reviewCount = room.getReviewCount();
		roomName = room.getRoomName();
		price = room.getPrice();
		totalPrice = room.getPrice() * days;
	}
}
