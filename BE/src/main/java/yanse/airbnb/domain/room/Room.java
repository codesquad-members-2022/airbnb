package yanse.airbnb.domain.room;


import static javax.persistence.FetchType.*;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.domain.image.Image;
import yanse.airbnb.domain.image.RoomImage;
import yanse.airbnb.domain.member.Members;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Room {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "room_id")
	private Long id;

	private int price;

	private String roomName;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "members_id")
	private Members members;

	private String roomDescription;

	private double rating;

	private int reviewCount;

	@OneToMany(mappedBy = "room")
	private List<RoomImage> roomImage = new ArrayList<>();

	@Embedded
	private Address address;

	@Embedded
	private RoomInfo roomInfo;

}
