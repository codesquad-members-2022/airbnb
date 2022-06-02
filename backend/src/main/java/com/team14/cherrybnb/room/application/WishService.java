package com.team14.cherrybnb.room.application;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomRepository;
import com.team14.cherrybnb.room.domain.Wish;
import com.team14.cherrybnb.room.domain.WishRepository;
import com.team14.cherrybnb.room.dto.wish.WishCardResponse;
import com.team14.cherrybnb.room.dto.wish.WishRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishService {

    private final WishRepository wishRepository;
    private final RoomRepository roomRepository;

    public WishService(WishRepository wishRepository, RoomRepository roomRepository) {
        this.wishRepository = wishRepository;
        this.roomRepository = roomRepository;
    }

    // 위시 리스트 조회
    public Page<WishCardResponse> getWishes(Pageable pageable, Member member) {
        Page<Wish> wishes = wishRepository.findAllByMemberId(pageable, member);
        List<WishCardResponse> wishCardResponses = wishes.getContent()
                .stream()
                .map(WishCardResponse::new)
                .collect(Collectors.toList());

        return new PageImpl<>(wishCardResponses, pageable, wishes.getTotalElements());
    }
    
    // 위시 리스트에 추가
    public void addWish(Member member, WishRequest wishRequest) {
        Room room = roomRepository.findById(wishRequest.getRoomId())
                .orElseThrow(RuntimeException::new);

        wishRepository.save(new Wish(member, room));
    }

    // 위시 리스트에서 제거
    public void removeWish(Long wishId) {
        Wish wish = wishRepository.getById(wishId);
        wishRepository.delete(wish);
    }
}
