package com.team14.cherrybnb.room.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class RoomInfo {

    private int capacity;

    private int roomCount;

    private int bedCount;

    private int restroomCount;
}
