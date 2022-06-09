package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.domain.Wish;
import kr.codesquad.airbnb.dto.WishResponse;
import kr.codesquad.airbnb.repository.LodgingRepository;
import kr.codesquad.airbnb.repository.MemberRepository;
import kr.codesquad.airbnb.repository.WishRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class WishService {

    private final LodgingRepository lodgingRepository;
    private final MemberRepository memberRepository;
    private final WishRepository wishRepository;

    public List<WishResponse> getWishList(String memberId) {
        Members findMember = memberRepository.findByGithubId(memberId).orElseThrow();
        return wishRepository.findAllByMembersId(findMember.getId())
            .stream().map(WishResponse::new)
            .collect(Collectors.toList());
    }

    public void addWish(String memberId, Long lodgingId) {
        Members findMember = memberRepository.findByGithubId(memberId).orElseThrow();
        Lodging findLodging = lodgingRepository.findById(lodgingId).orElseThrow();
        Wish wish = new Wish(findMember, findLodging);
        wishRepository.save(wish);
    }
}
