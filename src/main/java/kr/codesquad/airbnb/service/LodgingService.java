package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.airbnb.dto.LodgingResponse;
import kr.codesquad.airbnb.dto.LodgingResponseDto;
import kr.codesquad.airbnb.repository.LodgingRepository;
import kr.codesquad.airbnb.request.SearchLodgingRequest;
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

    public List<LodgingResponse> getLodgingList(SearchLodgingRequest searchLodgingRequest) {
        return lodgingRepository.search(searchLodgingRequest)
                .stream().map(LodgingResponse::new)
                .collect(Collectors.toList());
    }
}
