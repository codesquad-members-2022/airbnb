package com.codesquad.airbnb.district;

import com.codesquad.airbnb.room.entity.embeddable.Location;
import com.codesquad.airbnb.room.entity.embeddable.ReviewTotal;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DistrictService {

    private final DistrictRepository districtRepository;

    private static final double scoreThreshold = 3.5;
    private static final int countThreshold = 50;

    /**
     * 사용자의 현재 위치를 바탕으로 특정 반경 이내의 인기있는 여행지 목록을 반환한다.
     *
     * @param location 사용자의 현재 위치
     * @return 행정구역 응답 객체의 리스트
     */
    public List<DistrictResponse> showPopularDistricts(Location location) {
        return districtRepository.getDistrictsWithLocation(
            location, new ReviewTotal(scoreThreshold, countThreshold));
    }

}
