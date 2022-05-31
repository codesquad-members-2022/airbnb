package com.codesquad.airbnb.district;

import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.ReviewStat;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.io.ParseException;
import org.locationtech.jts.io.WKTReader;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class DistrictRepository {

    private final JPAQueryFactory queryFactory;
    private final EntityManager em;
    private final WKTReader wktReader;

    /**
     * 사용자의 현재 위치를 바탕으로 특정 반경 이내의 인기있는 여행지 목록을 반환한다.
     *
     * @param location 사용자의 현재 위치
     * @return 행정구역 응답 객체의 리스트
     */
    @Transactional(readOnly = true)
    public List<DistrictResponse> getDistrictsWithLocation(Location location,
        ReviewStat threshold) {
        String sql = "SELECT name, image_path, ST_Distance_Sphere(:centre, point)"
            + " FROM district"
            + " WHERE review_score >= :review_score AND review_count >= :review_count";

        try {
            Geometry centre = wktReader.read(String.format("POINT(%f %f))",
                location.getLongitude(),
                location.getLatitude()
            ));

            @SuppressWarnings("unchecked")
            List<Object[]> resultList = em.createNativeQuery(sql)
                .setParameter("centre", centre)
                .setParameter("review_score", threshold.getScore())
                .setParameter("review_count", threshold.getCount())
                .getResultList();

            return resultList.stream()
                .map(this::rowMapper)
                .collect(Collectors.toList());

            // RuntimeException 예외 전환
        } catch (ParseException e) {
            throw new IllegalArgumentException();
        }
    }

    /**
     * District 거리 조회 시 반환된 결과를 행정구역 응답 객체 리스트로 변환
     *
     * @param result 데이터베이스 조회 시 행정구역 레코드 출력 결과
     * @return 행정 구역 응답 객체 리스트
     */
    private DistrictResponse rowMapper(Object[] result) {
        return new DistrictResponse(
            (String) result[0],
            (String) result[1],
            toMinutes((Double) result[2])
        );
    }

    /**
     * 차량 평균 속도 60km 기반 이동 시간 분 단위로 변환
     *
     * @param distance 미터 단위 이동 거리
     * @return 차량 이동 시 분 단위 이동 시간
     */
    private int toMinutes(Double distance) {
        return (int) Math.ceil(distance / 1000);
    }

}
