package yanse.airbnb.domain.room.repository;

import java.util.List;
import org.springframework.data.repository.query.Param;
import yanse.airbnb.domain.room.Room;
import yanse.airbnb.web.dto.room.RequestRoomSearchDto;


public interface RoomRepositoryCustom {

	List<String> findByAddress(@Param("address") String address);

	List<Room> findRoomList(RequestRoomSearchDto dto);
}
