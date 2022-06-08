package team18.airbnb.search;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import team18.airbnb.domain.Accommodation;
import team18.airbnb.domain.Region;
import team18.airbnb.generalDto.LookAroundRegionDto;
import team18.airbnb.region.RegionService;
import team18.airbnb.search.dto.RegionNameDto;
import team18.airbnb.search.dto.SearchResultDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SearchController {

    private final RegionService regionService;
    private final SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<List<LookAroundRegionDto>> searchRegion() {
        List<Region> regions = regionService.createLookAroundRegion();
        List<LookAroundRegionDto> lookAroundRegionDtos = regions.stream()
                .map(LookAroundRegionDto::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(lookAroundRegionDtos);
    }

    @GetMapping("/filterSearch")
    public ResponseEntity<List<SearchResultDto>> searchResult(
            @RequestParam("region") String regionName,
            @RequestParam("checkinTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinTime,
            @RequestParam("checkoutTime") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutTime,
            @RequestParam("minPrice") int minPrice,
            @RequestParam("maxPrice") int maxPrice,
            @RequestParam("maxGuest") int maxGuest) {

        Region region = regionService.findRegionByRegionName(regionName);
        RegionNameDto regionNameDto = new RegionNameDto(region);

        Long regionId = regionNameDto.getId();

        List<Accommodation> accommodations = searchService.findTest(regionId, checkinTime, checkoutTime, minPrice, maxPrice, maxGuest);

        List<SearchResultDto> searchResultDtos = accommodations.stream()
                .map(accommodation -> new SearchResultDto(checkinTime, checkoutTime, accommodation))
                .collect(Collectors.toList());

        return ResponseEntity.ok(searchResultDtos);
    }
}
