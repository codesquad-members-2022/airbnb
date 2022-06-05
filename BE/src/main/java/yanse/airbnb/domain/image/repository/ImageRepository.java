package yanse.airbnb.domain.image.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import yanse.airbnb.domain.image.Image;
import yanse.airbnb.type.ImageType;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByImageType(ImageType imageType);
}
