package kr.codesquad.airbnb.repository;

import java.util.Optional;
import kr.codesquad.airbnb.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface EventRepository extends JpaRepository<Event, Long> {

    Event findByMainEventIsTrue();
}
