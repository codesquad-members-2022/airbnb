package yanse.airbnb.domain.reservation;

import static javax.persistence.FetchType.LAZY;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import yanse.airbnb.domain.member.Member;
import yanse.airbnb.domain.room.Room;


@Entity
public class Reservation {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reservation_id")
	private Long id;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "member_id")
	private Member member;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "room_id")
	private Room room;

	private int adultCount;

	private int childCount;

	private int infantCount;

	private int reservationPrice;

	@Embedded
	private DetailFee discountPolicy;

	private LocalDateTime checkInDateTime;

	private LocalDateTime checkOutDateTime;
}
