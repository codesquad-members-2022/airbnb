package teamproject.airbnb.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Data;
import teamproject.airbnb.domain.Reservation;
import teamproject.airbnb.domain.Review;
import teamproject.airbnb.domain.Room;

@Data
@AllArgsConstructor
public class RoomSimpleInfoDto {

	private String name;
	private String address;
	private String description;
	private String furnitureDescription;
	private double averageRating;
	private long reviewNumber;
	private long price;
	private long totalPrice;
	private boolean isBookmark;

	public static RoomSimpleInfoDto of(Room room, LocalDate checkIn, LocalDate checkOut,
		int memberId) {

		double averageRating =
			room.getReviews().stream().mapToDouble(Review::getRating).sum() / room.getReviews()
				.size();

		Period period = Period.between(checkIn, checkOut);
		Long totalPrice = room.getPrice() * period.getDays();

		boolean isBookmark = room.getReservations().stream()
			.anyMatch(r -> r.isSameMemberId(memberId));

		return new RoomSimpleInfoDto(
			room.getName(),
			room.getAddress(),
			room.getDescription(),
			room.getFurnitureDescription(),
			averageRating,
			(long) room.getReviews().size(),
			room.getPrice(),
			totalPrice,
			isBookmark);
	}
}
