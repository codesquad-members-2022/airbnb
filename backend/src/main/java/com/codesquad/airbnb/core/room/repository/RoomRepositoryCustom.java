package com.codesquad.airbnb.core.room.repository;

import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.core.room.entity.Room;
import java.util.List;

public interface RoomRepositoryCustom {

    List<Room> searchWithCondition(RoomSearCondition condition);

    List<Integer> searchPriceWithCondition(RoomSearCondition condition);

}
