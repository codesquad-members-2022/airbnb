package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Member;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member findMember(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_MEMBER));
    }
}
