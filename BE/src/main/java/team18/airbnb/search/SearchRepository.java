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
            "where a.accommodation_id NOT IN (select accommodation_id from schedule where  stay_date between :checkinTime and :checkoutTime)", nativeQuery = true)
    List<Accommodation> findTest(
            @Param("checkinTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinTime,
            @Param("checkoutTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutTime
    );
}

