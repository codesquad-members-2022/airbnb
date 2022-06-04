package codesquad.airbnb.controller;

import codesquad.airbnb.dto.AccommodationListDto;
import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.dto.ResponseMessage;
import codesquad.airbnb.service.AccommodationService;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping("/api/accommodations/price")
    public AccommodationPriceListDto prices(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                            @RequestParam Double latitude,
                                            @RequestParam Double longitude) {

        return accommodationService.getPricesByStayDate(in, out, latitude, longitude);
    }

    @GetMapping("/api/accommodations")
    public AccommodationListDto accommodations(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                               @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                               @RequestParam Integer minimum_money,
                                               @RequestParam Integer maximum_money,
                                               @RequestParam Integer personnel,
                                               @RequestParam Double latitude,
                                               @RequestParam Double longitude) {

        return accommodationService.getAccommodationInfoByCriteria(in, out, minimum_money, maximum_money, personnel, latitude, longitude);
    }

    @PostMapping("/api/accommodations")
    public ResponseEntity<ResponseMessage> reserve(@RequestParam Long member_id,
                                    @RequestParam Long accommodation_id,
                                    @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate in,
                                    @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate out,
                                    @RequestParam Integer personnel,
                                    @RequestParam Integer reservation_price) {

        accommodationService.reserveAccommodation(member_id, accommodation_id, in, out, personnel,
            reservation_price);

        ResponseMessage message = new ResponseMessage(HttpStatus.OK, "예약이 처리되었습니다.");

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
