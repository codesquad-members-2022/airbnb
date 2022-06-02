package kr.codesquad.airbnb.dto;

import java.util.ArrayList;
import java.util.List;

public interface RoomPriceStatistic {

    List<CategorizedPrice> countOfCategorizedPricePerNight = new ArrayList<>();

    Integer getMinPricePerNight();
    Integer getMaxPricePerNight();
    Integer getAvgPricePerNight();

    Integer get0to50000();
    Integer get50001to100000();
    Integer get100001to150000();
    Integer get150001to200000();
    Integer get200001to250000();
    Integer get250001to300000();
    Integer get300001to350000();
    Integer get350001to400000();
    Integer get400001to450000();
    Integer get450001to500000();
    Integer get500001to550000();
    Integer get550001to600000();
    Integer get600001to650000();
    Integer get650001to700000();
    Integer get700001to750000();
    Integer get750001to800000();
    Integer get800001to850000();
    Integer get850001to900000();
    Integer get900001to950000();
    Integer get950001to1000000();
    Integer get1000001to1050000();
    Integer get1050001to1100000();

    default List<CategorizedPrice> getCountOfCategorizedPricePerNight() {
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_0_TO_50000, get0to50000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_50001_TO_100000, get50001to100000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_100001_TO_150000, get100001to150000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_150001_TO_200000, get150001to200000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_200001_TO_250000, get200001to250000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_250001_TO_300000, get250001to300000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_300001_TO_350000, get300001to350000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_350001_TO_400000, get350001to400000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_400001_TO_450000, get400001to450000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_450001_TO_500000, get450001to500000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_500001_TO_550000, get500001to550000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_550001_TO_600000, get550001to600000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_600001_TO_650000, get600001to650000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_650001_TO_700000, get650001to700000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_700001_TO_750000, get700001to750000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_750001_TO_800000, get750001to800000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_800001_TO_850000, get800001to850000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_850001_TO_900000, get850001to900000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_900001_TO_950000, get900001to950000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_950001_TO_1000000, get950001to1000000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1000001_TO_1050000, get1000001to1050000()));
        countOfCategorizedPricePerNight.add(new CategorizedPrice(RangeOfPrice.RANGE_1050001_TO_1100000, get1050001to1100000()));

        return countOfCategorizedPricePerNight;
    }
}
