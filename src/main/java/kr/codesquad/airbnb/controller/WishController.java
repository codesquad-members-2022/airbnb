package kr.codesquad.airbnb.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.WishResponse;
import kr.codesquad.airbnb.service.WishService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WishController {

    private final WishService wishService;

    @GetMapping("/wish")
    public List<WishResponse> getWish(HttpServletRequest request) {
        Members member = (Members)request.getAttribute("Members");
        return wishService.getWishList(member.getGithubId());
    }

}
