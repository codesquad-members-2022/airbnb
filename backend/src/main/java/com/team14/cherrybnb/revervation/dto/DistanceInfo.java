package com.team14.cherrybnb.revervation.dto;

import lombok.Getter;

@Getter
public class DistanceInfo {

    private final double distance;
    private final double duration;

    public DistanceInfo(double distance, double duration) {
        this.distance = toKm(distance);
        this.duration = toMin(duration);
    }

    private double toKm(double distance) {
        return distance / 1000;
    }

    private double toMin(double duration) {
        return duration / 60;
    }
}
