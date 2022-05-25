package louie.dong.airbnb.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import louie.dong.airbnb.dto.SearchCountryResponse;
import louie.dong.airbnb.service.MockAccommodationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AccommodationController {

    private final MockAccommodationService mockAccommodationService;

    @GetMapping("/accommodations")
    public List<SearchCountryResponse> getSearchCountries(String country) {
        return mockAccommodationService.findByCountryLike(country);
    }
}
