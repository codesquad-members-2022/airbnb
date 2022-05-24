package yanse.airbnb.domain.hotel;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

	private String city;
	private String region;
	private String district;
	private String detail;
}
