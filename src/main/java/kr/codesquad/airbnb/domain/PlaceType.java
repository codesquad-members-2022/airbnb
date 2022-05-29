package kr.codesquad.airbnb.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum PlaceType {
    ENTIRE_PLACE("집 전체"), PRIVATE_ROOM("개인실"), SHARED_ROOM("다인실");

    private String name;
}
