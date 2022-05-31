package yanse.airbnb.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yanse.airbnb.domain.image.MainImageRepository;
import yanse.airbnb.type.ImageType;
import yanse.airbnb.web.dto.ImageListDto;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MainService {

    private final MainImageRepository mainImageRepository;

    public List<ImageListDto> findAllByImage(String imageType){
        return mainImageRepository.findAllByImageType(ImageType.valueOf(imageType))
                .stream().map(ImageListDto::new)
                .collect(Collectors.toList());
    }

}
