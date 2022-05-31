package com.codesquad.airbnb.domain;

import com.codesquad.airbnb.domain.search.Direction;
import com.codesquad.airbnb.util.GeometryUtil;
import java.util.Objects;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

@Getter
@Embeddable
@Access(AccessType.FIELD)
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

    public boolean isNull() {
        return longitude == null && latitude == null;
    }

    public Location move(double distance, Direction direction) {
        double radianLatitude = toRadian(latitude);
        double radianLongitude = toRadian(longitude);
        double radianAngle = toRadian(direction.getBearing());
        double distanceRadius = distance / 6371.01; // earth radius

        double newLatitude = Math.asin(sin(radianLatitude) * cos(distanceRadius) +
            cos(radianLatitude) * sin(distanceRadius) * cos(radianAngle));
        double newLongitude = radianLongitude + Math.atan2(sin(radianAngle) * sin(distanceRadius) *
            cos(radianLatitude), cos(distanceRadius) - sin(radianLatitude) * sin(newLatitude));

        newLongitude = normalizeLongitude(newLongitude);
        return new Location(toDegree(newLongitude), toDegree(newLatitude));
    }

    private Double toRadian(Double coordinate) {
        return coordinate * Math.PI / 180.0;
    }

    private Double toDegree(Double coordinate) {
        return coordinate * 180.0 / Math.PI;
    }

    private Double sin(Double coordinate) {
        return Math.sin(coordinate);
    }

    private Double cos(Double coordinate) {
        return Math.cos(coordinate);
    }

    private Double normalizeLongitude(Double longitude) {
        return (longitude + 540) % 360 - 180;
    }

}
