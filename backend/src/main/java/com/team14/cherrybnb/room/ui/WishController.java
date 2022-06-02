package com.team14.cherrybnb.room.ui;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.room.application.RoomService;
import com.team14.cherrybnb.room.application.WishService;
import com.team14.cherrybnb.room.dto.wish.WishCardResponse;
import com.team14.cherrybnb.room.dto.wish.WishRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/wish")
@RequiredArgsConstructor
public class WishController {

    private final WishService wishService;
    private final RoomService roomService;

    // 위시 리스트 조회
    @GetMapping
    public List<WishCardResponse> getWishes(Member loginMember) {

        return null;
    }

    // 위시 리스트에 추가
    @PostMapping
    public ResponseEntity<Void> addWish(Member loginMember, WishRequest wishRequest) {
        Long roomId = wishRequest.getRoomId();

        return null;
    }

    // 위시 리스트에서 제거
    @DeleteMapping
    public ResponseEntity<Void> removeWish(Member loginMember, Long wishId) {

        return null;
    }
}
