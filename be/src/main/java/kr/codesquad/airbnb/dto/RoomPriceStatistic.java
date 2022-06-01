package kr.codesquad.airbnb.dto;

public interface RoomPriceStatistic {

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
}
