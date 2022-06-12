package kr.codesquad.airbnb.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.WishResponse;
import kr.codesquad.airbnb.service.WishService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WishController {

    private static final Logger log = LoggerFactory.getLogger(WishController.class);
    private final WishService wishService;

    @GetMapping("/wish")
    public List<WishResponse> getWish(HttpServletRequest request) {
        Members member = (Members) request.getAttribute("Members");
        log.info("[member] : {}", member);

        return wishService.getWishList(member.getGithubId());
    }

    @PostMapping("/wish/{id}")
    public ResponseEntity addWish(@PathVariable Long id, HttpServletRequest request) {
        Members member = (Members) request.getAttribute("Members");
        log.info("[member] : {}", member);
        try {
            wishService.addWish(member.getGithubId(), id);
        } catch (RuntimeException e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/wish/{id}")
    public ResponseEntity deleteWish(@PathVariable Long id, HttpServletRequest request) {
        Members member = (Members) request.getAttribute("Members");
        log.info("[member] : {}", member);
        wishService.deleteWish(member.getGithubId(), id);
        return new ResponseEntity(HttpStatus.OK);
    }

}
