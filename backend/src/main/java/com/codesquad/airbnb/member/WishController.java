package com.codesquad.airbnb.member;

import com.codesquad.airbnb.member.dto.WishResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
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
}
