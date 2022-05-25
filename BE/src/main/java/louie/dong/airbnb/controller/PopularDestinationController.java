package louie.dong.airbnb.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import louie.dong.airbnb.dto.PopularDestinationResponse;
import louie.dong.airbnb.service.MockPopularDestinationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PopularDestinationController {

    private final MockPopularDestinationService mockPopularDestinationService;

    @GetMapping("/popular-destinations")
    public List<PopularDestinationResponse> getPopularDestinations() {
        return mockPopularDestinationService.findAll();
    }
}
