package com.codesquad.airbnb.district;

import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.ReviewStat;
import com.codesquad.airbnb.config.TestConfig;
import com.codesquad.airbnb.district.District.DistrictType;
import java.util.List;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Import({TestConfig.class, DistrictService.class, DistrictRepository.class})
@DisplayName("DistrictService 통합 테스트")
class DistrictServiceTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    DistrictService districtService;

    @Test
    @DisplayName("사용자 주변의 인기있는 행정구역 목록을 조회한다")
    public void districtsTest() {
        // given
        em.persist(new District(
            "서울특별시",
            "서울특별시",
            "https://bit.ly/3PKgIBo",
            DistrictType.PRIMARY,
            new Location(126.9896, 37.5499),
            new ReviewStat(4.5, 50)
        ));
        em.persist(new District(
            "대구광역시",
            "대구광역시",
            "https://bit.ly/3GkiDs7",
            DistrictType.PRIMARY,
            new Location(128.5692, 35.8281),
            new ReviewStat(3.0, 50)
        ));
        em.persist(new District(
            "대전광역시",
            "대전광역시",
            "https://bit.ly/3PHYdxG",
            DistrictType.PRIMARY,
            new Location(127.3974, 36.3370),
            new ReviewStat(4.5, 30)
        ));
        em.flush();
        em.clear();

        // when
        List<DistrictResponse> districts = districtService.showPopularDistricts(
            new Location(127.9298, 37.5564));

        // then
        // 인기있는 여행지의 기준 score: 3.5, count: 50
        then(districts.size()).isEqualTo(1);

        then(districts)
            .extracting("name")
            .containsExactly("서울특별시");
    }

}
