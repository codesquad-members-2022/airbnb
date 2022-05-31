package kr.codesquad.airbnb.repository;

import java.util.Optional;
import kr.codesquad.airbnb.domain.Lodging;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface LodgingRepository extends JpaRepository<Lodging, Long>, CustomLodgingRepository {

    Optional<Lodging> findById(@Param("id") Long id);
}
