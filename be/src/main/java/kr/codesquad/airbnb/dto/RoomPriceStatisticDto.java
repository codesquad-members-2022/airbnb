package kr.codesquad.airbnb.dto;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomPriceStatisticDto {

    private Integer minPricePerNight;
    private Integer maxPricePerNight;
    private Integer avgPricePerNight;
    private final List<CategorizedPrice> countOfCategorizedPricePerNight = new ArrayList<>();

    public RoomPriceStatisticDto of(RoomPriceStatistic roomPriceStatistic) {
        minPricePerNight = roomPriceStatistic.getMinPricePerNight();
        maxPricePerNight = roomPriceStatistic.getMaxPricePerNight();
        avgPricePerNight = roomPriceStatistic.getAvgPricePerNight();
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_0_TO_50000, roomPriceStatistic.get0to50000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_50001_TO_100000, roomPriceStatistic.get50001to100000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_100001_TO_150000, roomPriceStatistic.get100001to150000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_150001_TO_200000, roomPriceStatistic.get150001to200000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_200001_TO_250000, roomPriceStatistic.get200001to250000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_250001_TO_300000, roomPriceStatistic.get250001to300000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_300001_TO_350000, roomPriceStatistic.get300001to350000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_350001_TO_400000, roomPriceStatistic.get350001to400000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_400001_TO_450000, roomPriceStatistic.get400001to450000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_450001_TO_500000, roomPriceStatistic.get450001to500000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_500001_TO_550000, roomPriceStatistic.get500001to550000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_550001_TO_600000, roomPriceStatistic.get550001to600000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_600001_TO_650000, roomPriceStatistic.get600001to650000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_650001_TO_700000, roomPriceStatistic.get650001to700000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_700001_TO_750000, roomPriceStatistic.get700001to750000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_750001_TO_800000, roomPriceStatistic.get750001to800000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_800001_TO_850000, roomPriceStatistic.get800001to850000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_850001_TO_900000, roomPriceStatistic.get850001to900000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_900001_TO_950000, roomPriceStatistic.get900001to950000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_950001_TO_1000000, roomPriceStatistic.get950001to1000000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1000001_TO_1050000, roomPriceStatistic.get1000001to1050000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1050001_TO_1100000, roomPriceStatistic.get1050001to1100000()));

        return this;
    }
}
