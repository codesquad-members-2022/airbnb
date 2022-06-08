package kr.codesquad.airbnb.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.WishResponse;
import kr.codesquad.airbnb.service.WishService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WishController {

    private static final Logger log = LoggerFactory.getLogger(WishController.class);
    private final WishService wishService;

    @GetMapping("/wish")
    public List<WishResponse> getWish(HttpServletRequest request) {
        Members member = (Members)request.getAttribute("Members");
        log.info("[member] : {}", member);

        return wishService.getWishList(member.getGithubId());
    }

}
