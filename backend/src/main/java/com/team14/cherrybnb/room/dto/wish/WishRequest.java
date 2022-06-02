package com.team14.cherrybnb.room.dto.wish;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class WishRequest {

    @JsonProperty
    private Long roomId;
}
