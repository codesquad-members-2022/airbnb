package com.ahoo.airbnb.wish;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.Wish;
import com.ahoo.airbnb.exception.ExceptionMessage;
import com.ahoo.airbnb.member.MemberRepository;
import com.ahoo.airbnb.room.RoomRepository;
import com.ahoo.airbnb.room.dtos.RoomResponse;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishService {

    private final WishRepository wishRepository;
    private final RoomRepository roomRepository;
    private final MemberRepository memberRepository;

    public List<RoomResponse> findAll() {
        Member member =
            memberRepository.findById(1L).orElseThrow(() -> new NoSuchElementException(ExceptionMessage.NO_MEMBER_ID));

        return wishRepository.findAllByMember(member).stream()
            .map(RoomResponse::from)
            .collect(Collectors.toList());
    }

    public void registration(Long roomId) {
        Room room =
            roomRepository.findById(roomId).orElseThrow(() -> new NoSuchElementException(ExceptionMessage.NO_ROOM_ID));
        Member member =
            memberRepository.findById(1L).orElseThrow(() -> new NoSuchElementException(ExceptionMessage.NO_MEMBER_ID));
        wishRepository.save(new Wish(null, room, member));
    }

    public void deleteById(Long wishId) {
        try {
            wishRepository.deleteById(wishId);
        } catch (IllegalArgumentException | EmptyResultDataAccessException ex) {
            throw new NoSuchElementException(ExceptionMessage.NO_WISH_ID);
        }
    }
}
