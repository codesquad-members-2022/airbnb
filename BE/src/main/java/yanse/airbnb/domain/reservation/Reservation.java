package yanse.airbnb.domain.reservation;

import static javax.persistence.FetchType.LAZY;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import yanse.airbnb.domain.member.Members;
import yanse.airbnb.domain.room.Room;

@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Reservation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reservation_id")
	private Long id;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "members_id")
	private Members members;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "room_id")
	private Room room;

	private int totalGuest;

	private int reservationPrice;

	@Embedded
	private DetailFee detailFee;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkInDateTime;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate checkOutDateTime;
}
