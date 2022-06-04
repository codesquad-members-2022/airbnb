package codesquad.airbnb.repository;

import codesquad.airbnb.domain.Schedule;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findSchedulesByStayDateBetween(LocalDate checkInDate, LocalDate checkOutDate);

}
