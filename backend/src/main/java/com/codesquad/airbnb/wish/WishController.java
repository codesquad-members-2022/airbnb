package com.codesquad.airbnb.wish;

import com.codesquad.airbnb.member.dto.WishResponse;
import com.codesquad.airbnb.wish.dto.WishCreateRequest;
import com.codesquad.airbnb.wish.dto.WishDeleteRequest;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Wish API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/wishes")
public class WishController {

    private final WishService wishService;

    @ApiOperation(value = "위시리스트 목록 조회", notes = "멤버가 등록한 위시리스트를 모두 조회한다.")
    @GetMapping
    public List<WishResponse> listWishes(
        @ApiParam(value = "멤버의 Id", required = true)
        @RequestParam("memberId") Integer memberId) {
        return wishService.listWishes(memberId);
    }

    @ApiOperation(value = "위시리스트 추가", notes = "멤버가 숙소를 위시 리스트에 등록한다.")
    @PostMapping
    public void createWish(@RequestBody @Valid WishCreateRequest request) {
        wishService.addWish(request.getMemberId(), request.getRoomId());
    }

    @ApiOperation(value = "위시리스트 삭제", notes = "멤버가 숙소를 위시 리스트에 삭제한다.")
    @DeleteMapping
    public void deleteWish(@RequestBody WishDeleteRequest request) {
        wishService.deleteWish(request.getMemberId(), request.getWishId());
    }

}
