package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.DiscountPolicy;
import kr.codesquad.airbnb.domain.RoomDiscountTax;
import kr.codesquad.airbnb.domain.TaxPolicy;
import lombok.Getter;

@Getter
public class DiscountTaxDto {

    private String name;
    private int price;

    public DiscountTaxDto(RoomDiscountTax roomDiscountTax, int countOfIntervalBetweenDates, int countOfWeekends, int pricePerNight) {
        DiscountPolicy.fromName(roomDiscountTax.getDiscountTax().getName())
                .ifPresent(discountPolicy -> {
                    name = discountPolicy.getName();
                    if (discountPolicy == DiscountPolicy.WEEKLY_DISCOUNT) {
                        price -= (countOfWeekends * pricePerNight) * discountPolicy.getRate() / 100;
                        return;
                    }
                    price -= (countOfIntervalBetweenDates * pricePerNight) * discountPolicy.getRate() / 100;
                });

        TaxPolicy.fromName(roomDiscountTax.getDiscountTax().getName())
                .ifPresent(taxPolicy -> {
                    name = taxPolicy.getName();
                    price += (countOfIntervalBetweenDates * pricePerNight) * taxPolicy.getRate() / 100;
                });
    }
}
