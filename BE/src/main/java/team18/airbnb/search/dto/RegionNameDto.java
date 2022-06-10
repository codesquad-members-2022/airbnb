package team18.airbnb.search.dto;

import lombok.Getter;
import team18.airbnb.domain.Region;

@Getter
public class RegionNameDto {

    private final Long id;
    private final String regionName;

    public RegionNameDto(Region region) {
        this.id = region.getId();
        this.regionName = region.getRegionName();
    }
}
