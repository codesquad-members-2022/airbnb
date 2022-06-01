package com.team14.cherrybnb.room.domain;

import javax.persistence.Embeddable;

@Embeddable
public class RoomInfo {

    private int capacity;

    private int roomCount;

    private int bedCount;

    private int restroomCount;
}
