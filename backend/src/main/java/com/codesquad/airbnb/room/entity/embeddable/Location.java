package com.codesquad.airbnb.room.entity.embeddable;

import com.codesquad.airbnb.util.GeometryUtil;
import java.util.Objects;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Location {

    private Double longitude;
    private Double latitude;

    public boolean equals(Object object) {
        if (object == null || object.getClass() != this.getClass()) {
            return false;
        }
        return Objects.equals(((Location) object).longitude, this.longitude) &&
            Objects.equals(((Location) object).latitude, this.latitude);
    }

    public Point toPoint() {
        return GeometryUtil.createPoint(longitude, latitude);
    }

}
