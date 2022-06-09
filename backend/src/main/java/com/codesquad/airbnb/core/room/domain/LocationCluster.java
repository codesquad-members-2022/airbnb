package com.codesquad.airbnb.core.room.domain;

import com.codesquad.airbnb.core.common.embeddable.Location;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class LocationCluster {

    private static final double EARTH_RADIUS = 6371.01;

    private final Location north;
    private final Location south;
    private final Location east;
    private final Location west;


    public double getMaxLatitude() {
        return north.getLatitude();
    }

    public double getMinLatitude() {
        return south.getLatitude();
    }

    public double getMaxLongitude() {
        return east.getLongitude();
    }

    public double getMinLongitude() {
        return west.getLongitude();
    }

    public static LocationCluster of(Location location, Radius radius) {
        return new LocationCluster(
            move(location, radius.getVertical(), Direction.NORTH),
            move(location, radius.getVertical(), Direction.SOUTH),
            move(location, radius.getHorizontal(), Direction.EAST),
            move(location, radius.getHorizontal(), Direction.WEST)
        );
    }

    public static Location move(Location location, double distance, Direction direction) {
        double radianLatitude = toRadian(location.getLatitude());
        double radianLongitude = toRadian(location.getLongitude());
        double radianAngle = toRadian(direction.getBearing());
        double distanceRadius = distance / EARTH_RADIUS; // earth radius

        double newLatitude = Math.asin(sin(radianLatitude) * cos(distanceRadius) +
            cos(radianLatitude) * sin(distanceRadius) * cos(radianAngle));
        double newLongitude = radianLongitude + Math.atan2(sin(radianAngle) * sin(distanceRadius) *
            cos(radianLatitude), cos(distanceRadius) - sin(radianLatitude) * sin(newLatitude));

        newLongitude = normalizeLongitude(newLongitude);
        return new Location(toDegree(newLongitude), toDegree(newLatitude));
    }

    private static Double toRadian(Double coordinate) {
        return coordinate * Math.PI / 180.0;
    }

    private static Double toDegree(Double coordinate) {
        return coordinate * 180.0 / Math.PI;
    }

    private static Double sin(Double coordinate) {
        return Math.sin(coordinate);
    }

    private static Double cos(Double coordinate) {
        return Math.cos(coordinate);
    }

    private static Double normalizeLongitude(Double longitude) {
        return (longitude + 540) % 360 - 180;
    }

}
