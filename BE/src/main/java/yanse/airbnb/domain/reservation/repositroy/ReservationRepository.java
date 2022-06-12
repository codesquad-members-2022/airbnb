package yanse.airbnb.domain.reservation.repositroy;

import org.springframework.data.jpa.repository.JpaRepository;
import yanse.airbnb.domain.reservation.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
