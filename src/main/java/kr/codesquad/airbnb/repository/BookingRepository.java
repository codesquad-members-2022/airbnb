package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByMembers_GithubId(String githubId);
}
