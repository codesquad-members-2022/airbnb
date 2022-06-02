package com.team14.cherrybnb.room.application;

import com.team14.cherrybnb.room.domain.Room;
import com.team14.cherrybnb.room.domain.RoomRepository;
import com.team14.cherrybnb.room.dto.RoomCardResponse;
import com.team14.cherrybnb.room.dto.RoomDetailResponse;
import lombok.RequiredArgsConstructor;
import org.locationtech.jts.geom.Geometry;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<RoomCardResponse> getRoomsWithinCircle(Geometry circle) {
        return roomRepository.findRoomsWithinCircle(circle)
                .stream()
                .map(room -> new RoomCardResponse(room, false))
                .collect(Collectors.toList());
    }

    public RoomDetailResponse getRoomDetail(Long roomId) {
        Room room = roomRepository.findByRoomId(roomId).orElseThrow(RuntimeException::new);
        return new RoomDetailResponse(room, false);
    }
}
