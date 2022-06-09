package com.codesquad.airbnb.core.room.dto.response;

import com.codesquad.airbnb.core.room.domain.PriceRange;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PriceRangeResponse {

    private PriceRange range;
    private Map<Integer, Long> buckets;

    public static PriceRangeResponse of(PriceRange range, Map<Integer, Long> buckets) {
        return new PriceRangeResponse(range, buckets);
    }

}
