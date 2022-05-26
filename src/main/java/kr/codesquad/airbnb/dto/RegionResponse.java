package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Region;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RegionResponse {

    private Long id;
    private String name;
    private String description;
    private String imageUrl;

    public RegionResponse(Region region) {
        this.id = region.getId();
        this.name = region.getName();
        this.description = region.getDescription();
        this.imageUrl = region.getImageUrl();
    }

}
