package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Schedule;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findSchedulesByAccommodation_IdAndStayDateBetween(Long accommodationId, LocalDate checkInDate, LocalDate checkOutDate);

}
