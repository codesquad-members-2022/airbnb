package com.codesquad.airbnb.wish.dto;

import io.swagger.annotations.ApiModelProperty;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Getter
public class WishCreateRequest {

    @ApiModelProperty(value = "멤버의 Id", required = true)
    @NotNull(message = "멤버의 Id 가 입력되어야 합니다.")
    private Integer memberId;

    @ApiModelProperty(value = "숙소의 Id", required = true)
    @NotNull(message = "숙소의 Id 가 입력되어야 합니다.")
    private Integer roomId;

}
