package kr.codesquad.airbnb.domain;

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

    // RANGE_OF_PRICE 설정 기준으로 숙박 가격의 priceTag 계산.
    public static int makePriceTag(int roomPrice) {
        return roomPrice / CategorizedPrice.RANGE_OF_PRICE * CategorizedPrice.RANGE_OF_PRICE;
    }

    public void addRoomCount() {
        this.count++;
    }

    @Override
    public int compareTo(CategorizedPrice other) {
        return tag.compareTo(other.tag);
    }
}
