package yanse.airbnb.type;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum DiscountPolicy {

	week(4.0), month(8.0), year(16.0);

	private final double rate;
}
