package com.team14.cherrybnb.common.util;

import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.io.ParseException;
import org.locationtech.jts.io.WKTReader;
import org.locationtech.jts.util.GeometricShapeFactory;

public class GeometryUtils {

    private static final WKTReader wktReader = new WKTReader();
    private static final GeometricShapeFactory geometricShapeFactory = new GeometricShapeFactory();

    public static Geometry createCircle(double x, double y, double radius) {
        geometricShapeFactory.setNumPoints(32);
        geometricShapeFactory.setCentre(new Coordinate(x, y));
        geometricShapeFactory.setSize(radius * 2);
        return geometricShapeFactory.createCircle();
    }

    public static Point createPoint(double x, double y) throws ParseException {
        String format = String.format("POINT (%f %f)", x, y);
        return (Point) wktReader.read(format);
    }
}
