package yanse.airbnb.domain.room.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import yanse.airbnb.domain.room.Room;

public interface RoomRepository extends JpaRepository<Room, Long>, RoomRepositoryCustom{

	Optional<Room> findById(@Param("id") Long id);

}
