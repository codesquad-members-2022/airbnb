package com.ahoo.airbnb.member;

import com.ahoo.airbnb.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
