package kr.codesquad.airbnb.repository;

import java.util.List;
import kr.codesquad.airbnb.domain.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ImageRepository extends JpaRepository<Images, Long> {

    List<Images> findAllByLodgingId(@Param("lodging_id") Long id);
}
