package yanse.airbnb.domain.room;


import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Room {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "room_id")
	private Long id;

	private int totalRoom;

	private int price;

	private String name;

	private String hostname;

	private String description;

	private double rating;

	private int reviewCount;

	private String imageUrl;

	@Embedded
	private Address address;

	@Embedded
	private RoomInfo roomInfo;

}
