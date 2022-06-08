package team18.airbnb.region;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import team18.airbnb.domain.Region;
import team18.airbnb.generalDto.LookAroundRegionDto;
import team18.airbnb.region.dto.AccommodationByConceptDto;
import team18.airbnb.region.dto.HomeLayoutDto;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RegionController {

    private final RegionService regionService;

    @GetMapping("/main")
    public ResponseEntity<HomeLayoutDto> home() {

        List<AccommodationByConceptDto> accommodationByConceptDtos = regionService.createAccommodationByConceptDto();
        List<Region> regions = regionService.createLookAroundRegion();

        List<LookAroundRegionDto> lookAroundRegionDtos = regions.stream()
                .map(LookAroundRegionDto::new)
                .collect(Collectors.toList());

        HomeLayoutDto homeLayoutDto = new HomeLayoutDto(accommodationByConceptDtos, lookAroundRegionDtos);

        return ResponseEntity.ok(homeLayoutDto);
    }
}
