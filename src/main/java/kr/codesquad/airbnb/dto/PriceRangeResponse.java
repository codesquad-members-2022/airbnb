package kr.codesquad.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class PriceRangeResponse {

    private Long minPrice;
    private Long maxPrice;
    private List<Long> priceRange;

}
