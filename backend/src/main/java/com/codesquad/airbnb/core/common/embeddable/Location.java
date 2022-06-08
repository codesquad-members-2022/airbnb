package com.codesquad.airbnb.core.common.embeddable;

import com.codesquad.airbnb.core.common.util.GeometryUtil;
import java.util.Objects;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.locationtech.jts.geom.Point;

@Getter
@Embeddable
@Access(AccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
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

    public boolean isNull() {
        return Objects.isNull(longitude) || Objects.isNull(latitude);
    }

}
