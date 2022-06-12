package yanse.airbnb.web.dto.reservation;

import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

@Setter
@Getter
public class RequestReservationDto {

	private int totalGuest;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkIn;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkOut;

	private int totalPrice;
}
