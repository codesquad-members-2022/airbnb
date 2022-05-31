package com.codesquad.airbnb.room;

import com.codesquad.airbnb.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer>, RoomRepositoryCustom {

}
