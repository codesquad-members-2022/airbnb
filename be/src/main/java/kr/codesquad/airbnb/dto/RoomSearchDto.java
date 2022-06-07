package kr.codesquad.airbnb.dto;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class RoomSearchDto {

    private final List<RoomDto> rooms = new ArrayList<>();

    public void addRoom(RoomDto room) {
        rooms.add(room);
    }
}
