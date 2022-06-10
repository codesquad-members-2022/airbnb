package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.CategorizedPrice;
import kr.codesquad.airbnb.domain.RoomPriceStatistic;
import lombok.Getter;

import java.util.List;

@Getter
public class RoomPriceStatisticDto {

    private final int minPricePerNight;
    private final int maxPricePerNight;
    private final int avgPricePerNight;
    private final List<CategorizedPrice> countOfCategorizedPricePerNight;

    public RoomPriceStatisticDto(RoomPriceStatistic roomPriceStatistic) {
        minPricePerNight = roomPriceStatistic.getMinPrice();
        maxPricePerNight = roomPriceStatistic.getMaxPrice();
        avgPricePerNight = roomPriceStatistic.getAvgPrice();
        countOfCategorizedPricePerNight = roomPriceStatistic.getCountOfCategorizedPrice();
    }
}
