package com.codesquad.airbnb.auth;

import com.codesquad.airbnb.core.member.Member;
import com.codesquad.airbnb.core.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;

    public Member upsertMember(Member member) {
        final Member savedMember = memberRepository.findByGithubId(member.getGithubId())
            .map(findMember -> findMember.update(member))
            .orElse(member);

        memberRepository.save(savedMember);
        return savedMember;
    }
}
