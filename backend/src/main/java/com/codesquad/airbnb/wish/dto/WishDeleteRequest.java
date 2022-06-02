package com.codesquad.airbnb.wish.dto;

import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class WishDeleteRequest {

    @NotNull(message = "멤버의 Id 가 입력되어야 합니다.")
    private Integer memberId;

    @NotNull(message = "위시리스트의 Id 가 입력되어야 합니다.")
    private Integer wishId;

}
