package com.codesquad.airbnb.district;

import com.codesquad.airbnb.common.embeddable.Location;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/districts")
public class DistrictController {

    private final DistrictService districtService;

    /**
     * 사용자의 현재 위치를 바탕으로 특정 반경 이내의 인기있는 여행지 목록을 반환한다.
     *
     * @param longitude 사용자 현재 위치의 경도
     * @param latitude  사용자 현재 위치의 위도
     * @return 행정구역 응답 객체의 리스트
     */
    @GetMapping("/nearby")
    public List<DistrictResponse> getPopularDistricts(
        @RequestParam("longitude") Double longitude,
        @RequestParam("latitude") Double latitude) {
        return districtService.showPopularDistricts(new Location(longitude, latitude));
    }

}
