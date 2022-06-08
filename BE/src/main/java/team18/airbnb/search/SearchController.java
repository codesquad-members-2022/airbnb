package team18.airbnb.search;

import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team18.airbnb.domain.Accommodation;
import team18.airbnb.domain.Reservation;
import team18.airbnb.domain.Schedule;
import team18.airbnb.generalDto.LookAroundRegionDto;
import team18.airbnb.region.RegionService;
import team18.airbnb.search.dto.SearchResultDto;

import javax.naming.directory.SearchResult;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SearchController {

    private final RegionService regionService;
    private final SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<List<LookAroundRegionDto>> searchRegion() {
        return ResponseEntity.ok(regionService.createLookAroundRegionDto());
    }

    @GetMapping("/filterSearch")
    public ResponseEntity<List<SearchResultDto>> searchResult(
            @RequestParam("checkinTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinTime,
            @RequestParam("checkoutTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutTime,
            @RequestParam("minPrice") int minPrice,
            @RequestParam("maxPrice") int maxPrice,
            @RequestParam("maxGuest") int maxGuest) {

        List<Accommodation> accommodations = searchService.findTest(checkinTime, checkoutTime, minPrice, maxPrice, maxGuest);

        List<SearchResultDto> searchResultDtos = accommodations.stream()
                .map(accommodation -> new SearchResultDto(checkinTime, checkoutTime, accommodation))
                .collect(Collectors.toList());

        return ResponseEntity.ok(searchResultDtos);
    }
}
