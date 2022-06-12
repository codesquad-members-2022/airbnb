package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Members;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Members, Long> {
    Optional<Members> findByGithubId(String githubId);
}
