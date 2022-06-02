package yanse.airbnb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yanse.airbnb.domain.image.Image;
import yanse.airbnb.domain.image.ImageRepository;
import yanse.airbnb.type.ImageType;
import yanse.airbnb.web.dto.ImageListDto;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MainService {

    private final ImageRepository mainImageRepository;

    public List<ImageListDto> findAllByImage(String imageType){
        return mainImageRepository.findAllByImageType(ImageType.valueOf(imageType.toUpperCase()))
                .stream().map(Image::toImageListDTO)
                .collect(Collectors.toList());
    }
}
