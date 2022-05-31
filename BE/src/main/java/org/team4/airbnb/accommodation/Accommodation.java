package org.team4.airbnb.accommodation;

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
import lombok.Getter;
import org.team4.airbnb.domain.BaseCreated;
import org.team4.airbnb.domain.Geolocation;

@Entity
@Getter
public class Accommodation extends BaseCreated {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "accommodation_id")
	private Long id;

	private String name;

	private int price;

	@Embedded
	private Geolocation geolocation;

	private String address;

	@Enumerated(value = EnumType.STRING)
	@Column(name = "accommodation_type")
	private AccommodationType type;

	private String hostName;

	private String description;

	@Embedded
	private RoomFeature roomFeature;

	@OneToMany(mappedBy = "accommodation", fetch = FetchType.LAZY)
	private List<AccommodationImage> accommodationImages = new ArrayList<>();

}
