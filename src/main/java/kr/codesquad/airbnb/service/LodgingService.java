package kr.codesquad.airbnb.service;

import java.util.List;
import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.dto.LodgingResponseDto;
import kr.codesquad.airbnb.repository.ImageRepository;
import kr.codesquad.airbnb.repository.LodgingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class LodgingService {

    private final LodgingRepository lodgingRepository;
    private final ImageRepository imageRepository;

    public LodgingResponseDto getLodging(Long id) {
        Lodging lodging = lodgingRepository.findById(id).get();
        List<Images> allByLodgingId = imageRepository.findAllByLodgingId(id);
        LodgingResponseDto lodgingResponseDto = new LodgingResponseDto(lodging, allByLodgingId);
        return lodgingResponseDto;
    }
}
