package yanse.airbnb.domain.reservation;

import javax.persistence.Embeddable;

@Embeddable
public class DetailFee {

	private int night;
	private DiscountPolicy discountPolicy;
	private double cleaningFee;
	private double serviceTax;
	private double roomTax;

}
