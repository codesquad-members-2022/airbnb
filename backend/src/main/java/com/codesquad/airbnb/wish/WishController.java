package com.codesquad.airbnb.wish;

import com.codesquad.airbnb.member.dto.WishResponse;
import com.codesquad.airbnb.wish.dto.WishCreateRequest;
import com.codesquad.airbnb.wish.dto.WishDeleteRequest;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wishes")
public class WishController {

    private final WishService wishService;

    @GetMapping
    public List<WishResponse> listWishes(@RequestParam("memberId") Integer memberId) {
        return wishService.listWishes(memberId);
    }

    @PostMapping
    public void createWish(@RequestBody WishCreateRequest request) {
        wishService.addWish(request.getMemberId(), request.getRoomId());
    }

    @DeleteMapping
    public void deleteWish(@RequestBody WishDeleteRequest request) {
        wishService.deleteWish(request.getMemberId(), request.getWishId());
    }

}
