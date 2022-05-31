package yanse.airbnb.domain.image;

import org.springframework.data.jpa.repository.JpaRepository;
import yanse.airbnb.type.ImageType;

import java.util.List;

public interface MainImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByImageType(ImageType imageType);
}
