package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.dto.BookingResponse;
import kr.codesquad.airbnb.request.BookingRequest;
import kr.codesquad.airbnb.service.BookingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/reservations/lodgings/{lodgingId}")
    public BookingResponse bookLodging(@PathVariable Long lodgingId, @RequestBody BookingRequest bookingRequest, HttpServletRequest request) {
        Members member = (Members) request.getAttribute("Members");
        String githubId = member.getGithubId();
        log.info("[github]:{}", githubId);
        log.info("[request]:{}",bookingRequest);
        return bookingService.bookLodging(lodgingId, bookingRequest, githubId);
    }

    @GetMapping("/reservations")
    public List<BookingResponse> getReservations(HttpServletRequest request){
        Members member = (Members) request.getAttribute("Members");
        String githubId = member.getGithubId();
        return bookingService.getReservations(githubId);
    }
}
