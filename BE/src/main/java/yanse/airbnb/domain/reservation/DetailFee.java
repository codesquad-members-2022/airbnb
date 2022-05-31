package yanse.airbnb.domain.reservation;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import yanse.airbnb.type.DiscountPolicy;

@Embeddable
public class DetailFee {

	@Enumerated(EnumType.STRING)
	private DiscountPolicy discountPolicy;
	private double cleaningFee;
	private double serviceTax;
	private double roomTax;

}
