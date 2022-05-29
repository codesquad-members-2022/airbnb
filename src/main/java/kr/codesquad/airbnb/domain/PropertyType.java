package kr.codesquad.airbnb.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PropertyType {
    HOUSE("단독 주택"), APARTMENT("아파트"), GUESTHOUSE("별채"), HOTEL("호텔");

    private String name;
}
