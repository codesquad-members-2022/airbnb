package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.LodgingResponseDto;
import kr.codesquad.airbnb.repository.LodgingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class LodgingService {

    private final LodgingRepository lodgingRepository;

    public LodgingResponseDto getLodging(Long id) {
        return new LodgingResponseDto(lodgingRepository.findById(id).orElseThrow());
    }
}
