package com.codesquad.airbnb.room;

import com.codesquad.airbnb.room.dto.RoomSearCondition;
import com.codesquad.airbnb.room.entity.Room;
import java.util.List;

public interface RoomRepositoryCustom {

    List<Room> searchWithCondition(RoomSearCondition condition);

}
