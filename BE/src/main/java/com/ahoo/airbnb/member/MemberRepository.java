package com.ahoo.airbnb.member;

import com.ahoo.airbnb.entity.Member;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberRepository extends JpaRepository<Member, Long> {

	@Query("select m from Member m where m.oauthId = :oAuthId")
	Optional<Member> findByOAuthId(@Param("oAuthId") String oAuthId);
}
