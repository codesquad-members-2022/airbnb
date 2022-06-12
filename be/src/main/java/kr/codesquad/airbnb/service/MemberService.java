package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Member;
import kr.codesquad.airbnb.dto.MemberDto;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberDto findMember(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_MEMBER));

        return new MemberDto(member);
    }
}
