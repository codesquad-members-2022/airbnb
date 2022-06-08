package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long>, CustomBookingRepository {
}
