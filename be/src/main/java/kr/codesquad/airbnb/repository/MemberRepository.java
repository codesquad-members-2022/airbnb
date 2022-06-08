package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
