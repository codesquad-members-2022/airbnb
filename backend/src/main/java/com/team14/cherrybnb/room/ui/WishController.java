package com.team14.cherrybnb.room.ui;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.room.application.RoomService;
import com.team14.cherrybnb.room.application.WishService;
import com.team14.cherrybnb.room.dto.wish.WishCardResponse;
import com.team14.cherrybnb.room.dto.wish.WishRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
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
    public Page<WishCardResponse> searchWishes(@PageableDefault Pageable pageable, Member loginMember) {
        return wishService.getWishes(pageable, loginMember);
    }

    // 위시 리스트에 추가
    @PostMapping
    public ResponseEntity<Void> addWish(Member loginMember, WishRequest wishRequest) {
        wishService.addWish(loginMember, wishRequest);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // 위시 리스트에서 제거
    @DeleteMapping
    public ResponseEntity<Void> removeWish(Member loginMember, Long wishId) {
        wishService.removeWish(wishId, loginMember);

        return ResponseEntity.ok().build();
    }
}
