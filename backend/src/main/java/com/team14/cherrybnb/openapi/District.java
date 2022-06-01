package com.team14.cherrybnb.openapi;

public enum District {
    서울(126.97857310672501, 37.56654037462486),
    용인(127.17751600488093, 37.2409718113933),
    수원(127.02869106496286, 37.263501338400935),
    강릉(128.8759059060531, 37.752098625346775),
    부산(129.075073717621, 35.17975315226952),
    전주(127.14807326809175, 35.82363477515946),
    여수(127.66230030492281, 34.76021870014728),
    경주(129.22480648691675, 35.8561148324664);

    District(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    private double longitude; //x
    private double latitude;  //y

    public double getLongitude() {
        return longitude;
    }

    public double getLatitude() {
        return latitude;
    }
}
