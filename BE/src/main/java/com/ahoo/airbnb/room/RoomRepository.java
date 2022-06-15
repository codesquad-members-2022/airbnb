package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long>, RoomCustomRepository  {

}
