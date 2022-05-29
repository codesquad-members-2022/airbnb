package com.airbnb.api.houses;

import com.airbnb.api.houses.dto.HouseDetailResponse;
import com.airbnb.api.houses.dto.SearchConditionRequest;
import com.airbnb.domain.House;
import com.airbnb.service.HouseService;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController {

    private final HouseService houseService;

    public HouseController(HouseService houseService) {
        this.houseService = houseService;
    }

    @GetMapping
    public List<House> findHouse(@RequestBody SearchConditionRequest request, Pageable pageable) {
        List<House> byCondition = houseService.findByCondition(
                request.getPoint(),
                request.getMinFee(),
                request.getMaxFee()
        );

        // TODO HATEAOS 적용
        return byCondition;
    }

    @GetMapping("/{id}")
    public HouseDetailResponse findHouseInformation(@PathVariable Long id) {
        House findHouse = houseService.findHouseInformation(id);
        return new HouseDetailResponse(findHouse);
    }
}
