package com.codesquad.airbnb.wish;

import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.member.MemberRepository;
import com.codesquad.airbnb.member.dto.WishResponse;
import com.codesquad.airbnb.room.RoomRepository;
import com.codesquad.airbnb.room.entity.Room;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishService {

    private final WishRepository wishRepository;
    private final MemberRepository memberRepository;
    private final RoomRepository roomRepository;

    public List<WishResponse> listWishes(Integer memberId) {
        List<Wish> wishes = wishRepository.findByIdWIthRoomAndMember(memberId);
        return wishes.stream()
            .map(WishResponse::from)
            .collect(Collectors.toList());
    }

    public void addWish(Integer memberId, Integer roomId) {
        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new IllegalStateException("멤버가 존재하지 않습니다."));

        Room room = roomRepository.findById(roomId)
            .orElseThrow(() -> new IllegalStateException("숙소가 존재하지 않습니다."));
    }

}
