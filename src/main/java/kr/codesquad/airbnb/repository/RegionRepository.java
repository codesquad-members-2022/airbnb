package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegionRepository extends JpaRepository<Region, Long> {

    List<Region> findAll();

}
