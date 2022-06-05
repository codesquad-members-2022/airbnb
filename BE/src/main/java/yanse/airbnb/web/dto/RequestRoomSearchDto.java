package yanse.airbnb.web.dto;

import java.time.LocalDate;
import java.time.Month;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

@Getter
@Setter
@ToString
public class RequestRoomSearchDto {

	private String address;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkIn;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkOut;

	private int maxPrice;

	private int minPrice;

	private int adult;

	private int child;

	private int infant;

	public int checkInGuest() {
		return adult + child;
	}

	public int Days() {
		if (checkIn.getMonth() != checkOut.getMonth()) {
			if (checkIn.getMonth() == Month.FEBRUARY) {
				return 28 - checkIn.getDayOfMonth() + checkOut.getDayOfMonth();
			} else if (checkIn.getMonth() == Month.APRIL || checkIn.getMonth() == Month.JUNE ||
			checkIn.getMonth() == Month.SEPTEMBER || checkIn.getMonth() == Month.NOVEMBER) {
				return 31 - checkIn.getDayOfMonth() + checkOut.getDayOfMonth();
			} else {
				return 30  - checkIn.getDayOfMonth() + checkOut.getDayOfMonth();
			}
		}
		return checkOut.getDayOfMonth() - checkIn.getDayOfMonth();
	}
}
