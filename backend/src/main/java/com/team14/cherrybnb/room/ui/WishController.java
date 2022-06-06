package com.team14.cherrybnb.room.ui;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.room.application.WishService;
import com.team14.cherrybnb.room.dto.wish.WishCardResponse;
import com.team14.cherrybnb.room.dto.wish.WishRequest;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wishes")
@RequiredArgsConstructor
public class WishController {

    private final WishService wishService;

    @ApiOperation(
            value = "위시 리스트를 조회",
            notes = "위시 리스트를 조회한다.",
            produces = "application/json",
            response = WishCardResponse.class
    )
    @GetMapping
    public Page<WishCardResponse> searchWishes(@PageableDefault Pageable pageable, Member loginMember) {
        return wishService.getWishes(pageable, loginMember);
    }

    @ApiOperation(
            value = "위시 리스트에 추가",
            notes = "위시 리스트에 추가한다.",
            produces = "application/json"
    )
    @PostMapping
    public ResponseEntity<Void> addWish(Member loginMember, @RequestBody WishRequest wishRequest) {
        wishService.addWish(loginMember, wishRequest);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @ApiOperation(
            value = "위시 리스트에서 제거",
            notes = "위시 리스트에서 제거한다.",
            produces = "application/json"
    )
    @DeleteMapping
    public ResponseEntity<Void> removeWish(Member loginMember, Long wishId) {
        wishService.removeWish(wishId, loginMember);

        return ResponseEntity.ok().build();
    }
}
