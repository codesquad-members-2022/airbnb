package yanse.airbnb.domain.member;

import static javax.persistence.CascadeType.ALL;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.auth.dto.AccessToken;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.wish.Wish;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Members {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "members_id")
	private Long id;

	private String githubId;

	private String membersName;

	private String email;

	private String membersImage;

	@Embedded
	private AccessToken accessToken;

	private String jwtToken;

	@OneToMany(mappedBy = "members", cascade = ALL)
	private List<Wish> wishList = new ArrayList<>();

	@OneToMany(mappedBy = "members", cascade = ALL)
	private List<Reservation> reservationList = new ArrayList<>();

	public void saveJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
}
