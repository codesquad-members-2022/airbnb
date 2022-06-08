package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Access;
import java.util.List;

@Getter
@AllArgsConstructor
public class SearchLodgingsResponse {

    private int total;
    private List<LodgingResponse> lodgings;
}
