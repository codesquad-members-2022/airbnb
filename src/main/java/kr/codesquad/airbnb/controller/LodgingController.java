package kr.codesquad.airbnb.controller;

import java.util.List;
import kr.codesquad.airbnb.dto.LodgingResponse;
import kr.codesquad.airbnb.dto.LodgingDetailResponse;
import kr.codesquad.airbnb.dto.SearchLodgingsResponse;
import kr.codesquad.airbnb.request.SearchLodgingRequest;
import kr.codesquad.airbnb.service.LodgingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LodgingController {

    private final LodgingService lodgingService;

    @GetMapping("/lodgings/{id}")
    public LodgingDetailResponse getLodging(@PathVariable Long id) {
        return lodgingService.getLodging(id);
    }

    @GetMapping("/lodgings")
    public SearchLodgingsResponse getLodgingList(SearchLodgingRequest searchLodgingRequest) {
        return lodgingService.getLodgingList(searchLodgingRequest);
    }

}
