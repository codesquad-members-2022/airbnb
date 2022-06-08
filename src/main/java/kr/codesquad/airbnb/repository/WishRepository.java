package kr.codesquad.airbnb.repository;

import java.util.List;
import kr.codesquad.airbnb.domain.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface WishRepository extends JpaRepository<Wish, Long> {

    List<Wish> findAllByMembersId(@Param("members_id") Long memberId);
}
