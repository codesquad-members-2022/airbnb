package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.accommodation.Accommodation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class SearchQueryResponseDto {

    private Long id;
    private String name;
    private String imgUrl;
    private int maxPeople;
    private int feePerOneNight;
    private double coordinateX;
    private double coordinateY;

    public static SearchQueryResponseDto of(Accommodation accommodation) {
        return SearchQueryResponseDto.builder()
                .id(accommodation.getId())
                .name(accommodation.getName())
                .imgUrl(accommodation.getImgUrl())
                .maxPeople(accommodation.getSumOfPeopleCapacity())
                .feePerOneNight(accommodation.getFeePerOneNight())
                .coordinateX(accommodation.getCoordinateX())
                .coordinateY(accommodation.getCoordinateY())
                .build();
    }
}
