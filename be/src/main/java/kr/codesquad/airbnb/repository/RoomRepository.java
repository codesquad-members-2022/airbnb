package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long>, CustomRoomRepository {
}
