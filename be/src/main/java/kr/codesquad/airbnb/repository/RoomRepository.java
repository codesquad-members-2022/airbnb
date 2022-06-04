package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomPriceStatistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query(value = "SELECT\n" +
            "    MIN(price_per_night) as \"minPricePerNight\",\n" +
            "    MAX(price_per_night) as \"maxPricePerNight\",\n" +
            "    AVG(price_per_night) as \"avgPricePerNight\",\n" +
            "    SUM(case when 0 < price_per_night and price_per_night <= 50000 then 1 else 0  end) as \"0to50000\",\n" +
            "    SUM(case when 50000 < price_per_night and price_per_night <= 100000 then 1 else 0  end) as \"50001to100000\",\n" +
            "    SUM(case when 100000 < price_per_night and price_per_night <= 150000 then 1 else 0  end) as \"100001to150000\",\n" +
            "    SUM(case when 150000 < price_per_night and price_per_night <= 200000 then 1 else 0  end) as \"150001to200000\",\n" +
            "    SUM(case when 200000 < price_per_night and price_per_night <= 250000 then 1 else 0  end) as \"200001to250000\",\n" +
            "    SUM(case when 250000 < price_per_night and price_per_night <= 300000 then 1 else 0  end) as \"250001to300000\",\n" +
            "    SUM(case when 300000 < price_per_night and price_per_night <= 350000 then 1 else 0  end) as \"300001to350000\",\n" +
            "    SUM(case when 350000 < price_per_night and price_per_night <= 400000 then 1 else 0  end) as \"350001to400000\",\n" +
            "    SUM(case when 400000 < price_per_night and price_per_night <= 450000 then 1 else 0  end) as \"400001to450000\",\n" +
            "    SUM(case when 450000 < price_per_night and price_per_night <= 500000 then 1 else 0  end) as \"450001to500000\",\n" +
            "    SUM(case when 500000 < price_per_night and price_per_night <= 550000 then 1 else 0  end) as \"500001to550000\",\n" +
            "    SUM(case when 550000 < price_per_night and price_per_night <= 600000 then 1 else 0 end) as \"550001to600000\",\n" +
            "    SUM(case when 600000 < price_per_night and price_per_night <= 650000 then 1 else 0 end) as \"600001to650000\",\n" +
            "    SUM(case when 650000 < price_per_night and price_per_night <= 700000 then 1 else 0  end) as \"650001to700000\",\n" +
            "    SUM(case when 700000 < price_per_night and price_per_night <= 750000 then 1 else 0  end) as \"700001to750000\",\n" +
            "    SUM(case when 750000 < price_per_night and price_per_night <= 800000 then 1 else 0  end) as \"750001to800000\",\n" +
            "    SUM(case when 800000 < price_per_night and price_per_night <= 850000 then 1 else 0  end) as \"800001to850000\",\n" +
            "    SUM(case when 850000 < price_per_night and price_per_night <= 900000 then 1 else 0  end) as \"850001to900000\",\n" +
            "    SUM(case when 900000 < price_per_night and price_per_night <= 950000 then 1 else 0  end) as \"900001to950000\",\n" +
            "    SUM(case when 950000 < price_per_night and price_per_night <= 1000000 then 1 else 0  end) as \"950001to1000000\",\n" +
            "    SUM(case when 1000000 < price_per_night and price_per_night <= 1050000 then 1 else 0  end) as \"1000001to1050000\",\n" +
            "    SUM(case when 1050000 < price_per_night and price_per_night <= 1100000 then 1 else 0  end) as \"1050001to1100000\"\n" +
            "FROM\n" +
            "    room r\n" +
            "LEFT JOIN\n" +
            "    booking b\n" +
            "ON\n" +
            "    r.room_id = b.room_id\n" +
            "        AND ((check_in <= :checkIn AND check_out >= :checkIn) OR (check_in > :checkIn AND check_in <= :checkOut))\n" +
            "WHERE\n" +
            "    b.room_id is NULL", nativeQuery = true)
    //jpa projection 을 통해 쿼리 결과를 매핑
    RoomPriceStatistic findStatisticOfRoomPrice(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);
}
