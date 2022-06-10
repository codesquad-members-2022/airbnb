package teamproject.airbnb.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Room {

	@Id
	@GeneratedValue
	@Column(name = "ROOM_ID")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "LOCATION_ID")
	private Location location;

	@JsonIgnore
	@OneToMany(mappedBy = "room")
	private List<Reservation> reservations = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "room")
	private List<Image> images = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "room")
	private List<Review> reviews = new ArrayList<>();


	//주소, 좌표 추가해야될듯
	private String name;
	private String address;
	private String description;
	private String furnitureDescription;
	private long price;
	private int maximumRoomCount;
	private int remainingRoomCount;
	private int discount;
	private long reviewNumber;
	private long cleaningFee;
	private long serviceCharge;
	private long lodgingTax;

	public Boolean isReservationAvailable(LocalDate checkIn) {
		// 잔여룸이 있을 경우 true
		if (this.getRemainingRoomCount() > 0L) {
			return true;
		}
		// 현재 룸의 예약건 중에 파라미터로 온 checkIn보다 먼저 checkOut되는 건이 있다.
		return reservations.stream()
			.anyMatch(r -> r.getCheckOut().isBefore(checkIn));
	}

	public Boolean fallWithinPriceRange(Long minimumPrice, Long maximumPrice) {
		return (minimumPrice <= this.price) && (this.price <= maximumPrice);
	}

	// TODO 방 입주
	public void booked() {
	}

	// TODO
	public Boolean checkReservation(LocalDate checkIn, LocalDate checkOut) {

		if (reservations.isEmpty()) {
			return false;
		}

		return reservations.stream()
			.anyMatch(r -> r.isExist(checkIn, checkOut));

	}
}
