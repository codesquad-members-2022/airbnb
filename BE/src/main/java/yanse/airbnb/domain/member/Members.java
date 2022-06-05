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
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.wish.Wish;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Members {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "members_id")
	private Long id;

	private String membersName;

	private String email;

	private String membersImage;

	@OneToMany(mappedBy = "members", cascade = ALL)
	private List<Wish> wishList = new ArrayList<>();

	@OneToMany(mappedBy = "members", cascade = ALL)
	private List<Reservation> reservationList = new ArrayList<>();

}
