package yanse.airbnb.domain.reservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import yanse.airbnb.domain.reservation.Reservation;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("select r from Reservation r join fetch r.room where  r.members.id = :id")
    List<Reservation> findAllByReservation(Long id);

    Optional<Reservation> findById(Long id);
}
