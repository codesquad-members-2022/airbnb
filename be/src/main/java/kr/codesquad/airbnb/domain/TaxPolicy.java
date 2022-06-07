package kr.codesquad.airbnb.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.Optional;

@AllArgsConstructor
@Getter
public enum TaxPolicy {

    ACCOMMODATION_TAX_FEE("숙박세와 수수료", 10),
    SERVICE_FEE("서비스 수수료", 8),
    CLEANING_FEE("청소비", 3),
    ;

    private final String name;
    private final Integer rate;

    public static Optional<TaxPolicy> fromName(String name) {
        return Arrays.stream(values())
                .filter(taxPolicy -> taxPolicy.name.equals(name))
                .findFirst();
    }
}
