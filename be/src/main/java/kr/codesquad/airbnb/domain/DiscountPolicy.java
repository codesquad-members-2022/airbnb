package kr.codesquad.airbnb.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.Optional;

@AllArgsConstructor
@Getter
public enum DiscountPolicy {

    WEEKLY_DISCOUNT("주간 할인", 5),
    LONG_TERM_STAY_DISCOUNT("장기 숙박 할인", 20),
    SPECIAL_DISCOUNT("특별가 제안", 15),
    ;

    private final String name;
    private final Integer rate;

    public static Optional<DiscountPolicy> fromName(String name) {
        return Arrays.stream(values())
                .filter(discountPolicy -> discountPolicy.name.equals(name))
                .findFirst();
    }
}
