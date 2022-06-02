package com.codesquad.airbnb.wish;

import com.codesquad.airbnb.exception.ErrorCode;
import com.codesquad.airbnb.exception.unchecked.NotAvailableException;
import com.codesquad.airbnb.exception.unchecked.NotFoundException;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.member.MemberRepository;
import com.codesquad.airbnb.member.dto.WishResponse;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.repository.RoomRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class WishService {

    private final WishRepository wishRepository;
    private final MemberRepository memberRepository;
    private final RoomRepository roomRepository;

    public List<WishResponse> listWishes(Integer memberId) {
        List<Wish> wishes = wishRepository.findByMemberIdWIthRoomAndMember(memberId);
        return wishes.stream()
            .map(WishResponse::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public Wish addWish(Integer memberId, Integer roomId) {
        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.MEMBER_NOT_FOUND));

        Room room = roomRepository.findById(roomId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.ROOM_NOT_FOUND));

        return wishRepository.save(new Wish(member, room));
    }

    @Transactional
    public Wish deleteWish(Integer memberId, Integer wishId) {
        Wish wish = wishRepository.findByIdWithMember(wishId)
            .orElseThrow(() -> new NotFoundException(ErrorCode.WISH_NOT_FOUND));

        validateMember(wish.getMember(), memberId);
        wish.setDeleted(true);
        return wish;
    }

    private void validateMember(Member member, Integer memberId) {
        if (!member.isEqualsId(memberId)) {
            throw new NotAvailableException(ErrorCode.MEMBER_NOT_IDENTIFIED);
        }
    }

}
