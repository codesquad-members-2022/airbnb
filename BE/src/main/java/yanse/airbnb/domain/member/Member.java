package yanse.airbnb.domain.member;

import static javax.persistence.CascadeType.ALL;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.wish.WishList;

@Entity
public class Member {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long id;

	private String name;

	private String email;

	@OneToMany(mappedBy = "member", cascade = ALL)
	private List<WishList> wishList = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<Reservation> reservationList = new ArrayList<>();

}
