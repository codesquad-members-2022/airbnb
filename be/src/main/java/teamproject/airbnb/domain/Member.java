package teamproject.airbnb.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Member {

	@Id
	@GeneratedValue
	@Column(name = "MEMBER_ID")
	private Long id;

	@JsonIgnore
	@OneToMany(mappedBy = "member")
	private List<Reservation> myReservation = new ArrayList<>();

	@NotEmpty
	private String name;

	// TODO
	//  wishList 를 지니는 것 만으로 오류가 발생한다.
	// 다대일 관계 때문인 것으로 예측되며, 그래서 wishList 를 따로 엔티티를 만드는게 좋을듯.
	//private List<Long> wishList = new ArrayList<>();

	public boolean isSameId(int memberId) {
		return getId().equals(memberId);
	}
}
