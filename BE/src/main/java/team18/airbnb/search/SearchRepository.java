package team18.airbnb.search;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import team18.airbnb.domain.Accommodation;

import java.time.LocalDate;
import java.util.List;

public interface SearchRepository extends JpaRepository<Accommodation, Long> {

    @Query(value = "Select a.accommodation_id, dong, eup, gu, gun, si, amount_of_day, cleaning_fee, discount_policy, room_charge, service_fee, total_amount_of_day, total_amount_of_reservation, accommodation_type, bath_count, bed_count, max_guest, description, main_image_url, name, review_count, start_point, region_id " +
            "From accommodation AS a left join schedule AS s on a.accommodation_id = s.accommodation_id where s.stay_date not between :checkinTime and :checkoutTime group by a.accommodation_id", nativeQuery = true)
    List<Accommodation> findTest(
            @Param("checkinTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinTime,
            @Param("checkoutTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutTIme
    );

}
