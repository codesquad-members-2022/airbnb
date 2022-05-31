package com.codesquad.airbnb.room;

import com.codesquad.airbnb.room.dto.RoomSearCondition;
import com.codesquad.airbnb.room.dto.RoomSearchResponse;
import com.codesquad.airbnb.room.entity.Room;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<RoomSearchResponse> searchRooms(RoomSearCondition condition) {
        List<Room> rooms = roomRepository.searchWithCondition(condition);
        return rooms.stream()
            .map(RoomSearchResponse::new)
            .collect(Collectors.toList());
    }

}
