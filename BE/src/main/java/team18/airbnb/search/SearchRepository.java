package team18.airbnb.search;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

import team18.airbnb.domain.Accommodation;

public interface SearchRepository extends JpaRepository<Accommodation, Long> {

    @Query(value = "select * " +
            "from accommodation as a " +
            "where a.id NOT IN " +
            "(select accommodation_id " +
            " from schedule where stay_date between :checkinDate and :checkoutDate)" +
            " and a.region_id = :regionId" +
            " and a.amount_of_day between :minPrice and :maxPrice" +
            " and a.max_guest <= :maxGuest ", nativeQuery = true)
    List<Accommodation> findAccommodationBy(
            @Param("regionId") Long regionId,
            @Param("checkinDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinDate,
            @Param("checkoutDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutDate,
            @Param("minPrice") int minPrice,
            @Param("maxPrice") int maxPrice,
            @Param("maxGuest") int maxGuest
    );
}

