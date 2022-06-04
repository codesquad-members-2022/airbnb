package kr.codesquad.airbnb.dto;

import lombok.Getter;

@Getter
public class CategorizedPrice {

    private Integer min;
    private Integer max;
    private Integer count;

    public CategorizedPrice(RangeOfPrice rangeOfPrice, Integer count) {
        this.min = rangeOfPrice.getMin();
        this.max = rangeOfPrice.getMax();
        this.count = count;
    }
}
