package kr.codesquad.airbnb.repository;

import java.time.LocalDate;
import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    @Query(value = "SELECT DISTINCT AC FROM Accommodation AS AC LEFT JOIN Reservation AS RS on AC = RS.accommodation "
        + "WHERE (:minPrice <= AC.feePerOneNight AND AC.feePerOneNight <= :maxPrice) AND (:adultChildCount <= AC.adultChildCapacity AND :infantCount <= AC.infantCapacity) AND "
        + "( (:checkinDate IS NULL AND :checkoutDate IS NULL) OR ( RS.checkinDate IS NULL AND RS.checkoutDate IS NULL) OR RS.checkoutDate <= :checkinDate OR :checkoutDate <= RS.checkinDate)"
    )
    List<Accommodation> findAllBySearchCondition(
        @Param("checkinDate") LocalDate checkinDate,
        @Param("checkoutDate") LocalDate checkoutDate,
        @Param("minPrice") int minPrice,
        @Param("maxPrice") int maxPrice,
        @Param("adultChildCount") int adultChildCount,
        @Param("infantCount") int infantCount
        );
    @Query(value = "SELECT fee_per_one_night FROM accommodation", nativeQuery = true)
    List<Integer> findAllprices();
}
