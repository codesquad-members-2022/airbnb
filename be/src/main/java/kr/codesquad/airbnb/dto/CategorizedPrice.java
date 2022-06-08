package kr.codesquad.airbnb.dto;

import lombok.Getter;

@Getter
public class CategorizedPrice implements Comparable<CategorizedPrice> {

    public static final int RANGE_OF_PRICE = 10_000;

    private Integer tag;
    private Integer endOfRange;
    private Integer count;

    public CategorizedPrice(int priceTag, int count) {
        this.tag = priceTag;
        this.endOfRange = priceTag + RANGE_OF_PRICE - 1;
        this.count = count;
    }

    public void addRoomCount() {
        this.count++;
    }

    @Override
    public int compareTo(CategorizedPrice other) {
        return tag.compareTo(other.tag);
    }
}
