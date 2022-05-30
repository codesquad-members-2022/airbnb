package org.team4.airbnb.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Accommodation extends BaseCreated {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "accommodation_id")
	private Long id;

	private String name;

	private int price;

	@Embedded
	private Geolocation geolocation;

	@Embedded
	private Address address;

	@Enumerated(value = EnumType.STRING)
	@Column(name = "accommodation_type")
	private AccommodationType type;

	private String hostName;

	private String description;

	@Embedded
	private RoomFeature roomFeature;

	@OneToMany(mappedBy = "accommodation", fetch = FetchType.LAZY)
	private List<AccommodationImage> accommodationImages = new ArrayList<>();

	@OneToMany(mappedBy = "accommodation", fetch = FetchType.LAZY)
	private List<Review> reviews = new ArrayList<>();

	@OneToMany(mappedBy = "accommodation", fetch = FetchType.LAZY)
	private List<Reservation> reservations = new ArrayList<>();

	@OneToMany(mappedBy = "accommodation", fetch = FetchType.LAZY)
	private List<Wish> wishes = new ArrayList<>();

}
