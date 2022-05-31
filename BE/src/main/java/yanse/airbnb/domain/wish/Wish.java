package yanse.airbnb.domain.wish;

import static javax.persistence.FetchType.LAZY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import yanse.airbnb.domain.member.Members;
import yanse.airbnb.domain.room.Room;


@Entity
public class Wish {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "wish_id")
	private Long id;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "members_id")
	private Members members;

	@ManyToOne(fetch = LAZY)
	@JoinColumn(name = "room_id")
	private Room room;
}
