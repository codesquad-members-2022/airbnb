package kr.codesquad.airbnb.domain;

import lombok.Getter;

@Getter
public class RoomDiscountTaxDetail {

    private String name;
    private int price;

    public RoomDiscountTaxDetail(DiscountTax DiscountTax, int countOfIntervalBetweenDates, int countOfWeekends, int pricePerNight) {
        DiscountPolicy.fromName(DiscountTax.getName())
                .ifPresent(discountPolicy -> {
                    name = discountPolicy.getName();
                    price -= applyDiscountPolicy(countOfIntervalBetweenDates, countOfWeekends, pricePerNight, discountPolicy);
                });

        TaxPolicy.fromName(DiscountTax.getName())
                .ifPresent(taxPolicy -> {
                    name = taxPolicy.getName();
                    price += calculateTaxPolicy(countOfIntervalBetweenDates, pricePerNight, taxPolicy.getRate());
                });
    }

    private int calculateTaxPolicy(int countOfIntervalBetweenDates, int pricePerNight, int rate) {
        return (countOfIntervalBetweenDates * pricePerNight) * rate / 100;
    }

    private int applyDiscountPolicy(int countOfIntervalBetweenDates, int countOfWeekends, int pricePerNight, DiscountPolicy discountPolicy) {
        if (isWeekendDiscountPolicy(discountPolicy)) {
            return calculateWeekendDiscountPolicy(countOfWeekends, pricePerNight, discountPolicy.getRate());
        }
        return calculateCommonDiscountPolicy(countOfIntervalBetweenDates, pricePerNight, discountPolicy.getRate());
    }

    private boolean isWeekendDiscountPolicy(DiscountPolicy discountPolicy) {
        return discountPolicy == DiscountPolicy.WEEKLY_DISCOUNT;
    }

    private int calculateCommonDiscountPolicy(int countOfIntervalBetweenDates, int pricePerNight, int rate) {
        return (countOfIntervalBetweenDates * pricePerNight) * rate / 100;
    }

    private int calculateWeekendDiscountPolicy(int countOfWeekends, int pricePerNight, int rate) {
        return (countOfWeekends * pricePerNight) * rate / 100;
    }
}
