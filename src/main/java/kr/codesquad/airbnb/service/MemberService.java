package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.GitHubUser;
import kr.codesquad.airbnb.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Members findLoginMember(GitHubUser gitHubUser) {
        if (!memberRepository.findByGithubId(gitHubUser.getGithubId()).isPresent()) {
            Members members = gitHubUser.createMember();
            memberRepository.save(members);
            return members;
        }
        return memberRepository.findByGithubId(gitHubUser.getGithubId()).orElseThrow(RuntimeException::new);
    }
}
