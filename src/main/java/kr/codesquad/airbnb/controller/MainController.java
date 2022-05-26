package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.RegionResponse;
import kr.codesquad.airbnb.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MainController {

    private final MainService mainService;

    @GetMapping("/main/nearby")
    public List<RegionResponse> getNearRegions() {
        return mainService.getNearRegions();
    }
}
