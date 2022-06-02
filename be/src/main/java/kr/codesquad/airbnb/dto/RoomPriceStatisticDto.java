package kr.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class RoomPriceStatisticDto {

    private Integer minPricePerNight;
    private Integer maxPricePerNight;
    private Integer avgPricePerNight;
    private List<CategorizedPrice> countOfCategorizedPricePerNight;

    public static RoomPriceStatisticDto of(RoomPriceStatistic roomPriceStatistic) {
        return RoomPriceStatisticDto.builder()
                .minPricePerNight(roomPriceStatistic.getMinPricePerNight())
                .maxPricePerNight(roomPriceStatistic.getMaxPricePerNight())
                .avgPricePerNight(roomPriceStatistic.getAvgPricePerNight())
                .countOfCategorizedPricePerNight(roomPriceStatistic.getCountOfCategorizedPricePerNight())
                .build();
    }
}
