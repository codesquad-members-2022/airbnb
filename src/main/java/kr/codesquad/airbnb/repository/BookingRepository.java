package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Reservation, Long> {

}
