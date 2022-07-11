package com.team14.cherrybnb.openapi.dummy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class DummyInfo {

    @JsonProperty("RDNWHLADDR")
    private String address;
    @JsonProperty("BPLCNM")
    private String name;
    @JsonProperty("X")
    private Double x;
    @JsonProperty("Y")
    private Double y;
}
