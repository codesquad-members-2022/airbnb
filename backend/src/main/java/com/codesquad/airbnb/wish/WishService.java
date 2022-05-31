package com.codesquad.airbnb.wish;

import com.codesquad.airbnb.member.dto.WishResponse;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishService {

    private final WishRepository wishRepository;

    public List<WishResponse> listWishes(Integer memberId) {
        List<Wish> wishes = wishRepository.findByMemberId(memberId);
        return wishes.stream()
            .map(WishResponse::from)
            .collect(Collectors.toList());
    }

}
