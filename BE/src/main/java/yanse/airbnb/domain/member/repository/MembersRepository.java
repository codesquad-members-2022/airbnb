package yanse.airbnb.domain.member.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import yanse.airbnb.domain.member.Members;

public interface MembersRepository extends JpaRepository<Members, Long> {

	Optional<Members> findByGithubId(String githubId);

	Optional<Members> findByJwtToken(String AccToken);
}
