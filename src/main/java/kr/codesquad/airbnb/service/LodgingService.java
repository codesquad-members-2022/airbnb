package kr.codesquad.airbnb.service;

import java.util.List;
import java.util.stream.Collectors;

import kr.codesquad.airbnb.dto.LodgingResponse;
import kr.codesquad.airbnb.dto.LodgingDetailResponse;
import kr.codesquad.airbnb.dto.SearchLodgingsResponse;
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

    public LodgingDetailResponse getLodging(Long id) {
        return new LodgingDetailResponse(lodgingRepository.findById(id).orElseThrow());
    }

    public SearchLodgingsResponse getLodgingList(SearchLodgingRequest searchLodgingRequest) {
        List<LodgingResponse> lodgingList = lodgingRepository.search(searchLodgingRequest)
                .stream().map(LodgingResponse::new).collect(Collectors.toList());
        int total = lodgingList.size();
        return new SearchLodgingsResponse(total, lodgingList);
    }
}
