package com.team14.cherrybnb.room.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RoomInfo {

    private int capacity;

    private int roomCount;

    private int bedCount;

    private int restroomCount;
}
