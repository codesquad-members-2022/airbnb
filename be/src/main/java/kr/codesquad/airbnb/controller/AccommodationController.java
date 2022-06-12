package kr.codesquad.airbnb.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import kr.codesquad.airbnb.dto.*;
import kr.codesquad.airbnb.service.AccommodationService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/accommodations")
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping
    public ResponseEntity<List<SearchQueryResponseDto>> loadAccommodationsBySearchCondition(
        @ModelAttribute SearchQueryRequestDto requestDto) {
        return ResponseEntity.ok(accommodationService.getSearchResult(requestDto));
    }

    @GetMapping("/range")
    public ResponseEntity<Map<String, Object>> loadAccommodationPriceCounts(
            @RequestParam("checkinDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkinDate,
            @RequestParam("checkoutDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkoutDate) {
        return ResponseEntity.ok(accommodationService.getPriceCountsByDateRange(checkinDate, checkoutDate));
    }

    @GetMapping("/prices")
    public ResponseEntity<List<Integer>> loadAllAccommodationPrices() {
        return ResponseEntity.ok(accommodationService.getAllPrices());
    }

    @GetMapping("/{accommodationId}/reservation")
    public ResponseEntity<ReserveFormResponseDto> loadReservationForm(
        @PathVariable String accommodationId) {
        return ResponseEntity.ok(accommodationService.getReservationPage(accommodationId));
    }

    @PostMapping("/{accommodationId}/reservation")
    public ResponseEntity<ReserveResponseDto> registerReservation(@RequestBody ReserveRequestDto requestDto, @PathVariable Long accommodationId) {
           return ResponseEntity.ok(accommodationService.registerReservation(requestDto, accommodationId));
    }

}
