package yanse.airbnb.domain.image.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import yanse.airbnb.domain.image.RoomImage;

public interface RoomImageRepository extends JpaRepository<RoomImage, Long> {
    List<RoomImage> findAllByRoomId(Long id);
}
