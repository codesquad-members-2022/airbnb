package team15.airbnb.accommodation.presentation.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team15.airbnb.accommodation.application.AccommodationService;
import team15.airbnb.accommodation.presentation.dto.AccommodationDetailsResponse;

@RequiredArgsConstructor
@RestController
@RequestMapping("/accommodations")
public class AccommodationController {

    private final AccommodationService accommodationService;

    @GetMapping("/{id}")
    public ResponseEntity<AccommodationDetailsResponse> searchAccommodation(@PathVariable Long id) {
        return ResponseEntity.ok().body(accommodationService.searchById(id));
    }
}
