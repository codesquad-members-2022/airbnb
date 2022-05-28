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
        return new LodgingResponseDto(lodgingRepository.findById(id).orElseThrow(),
            imageRepository.findAllByLodgingId(id));
    }
}
