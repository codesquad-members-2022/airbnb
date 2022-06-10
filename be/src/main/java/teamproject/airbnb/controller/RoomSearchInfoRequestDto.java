package teamproject.airbnb.controller;

import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoomSearchInfoRequestDto {

	private LocalDate checkIn;
	private LocalDate checkOut;
	private long minimumPrice;
	private long maximumPrice;
	private int guestCount;
	private int kidCount;
	private int memberId;
}
