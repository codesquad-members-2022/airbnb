package com.airbnb.utils;

import com.airbnb.domain.Location;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.io.ParseException;
import org.locationtech.jts.io.WKTReader;

public class GeometryUtils {

    public static Point toPoint(Double latitude, Double longitude) {
        String pointWKT = String.format("POINT(%s %s)", longitude, latitude);
        try {
            return (Point) new WKTReader().read(pointWKT);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
