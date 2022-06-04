package codesquad.airbnb.accommodation.service;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.repository.AccommodationRepository;
import codesquad.airbnb.exception.AccommodationNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AccommodationQueryService {

    private final AccommodationRepository accommodationRepository;

    /**
     * id로 숙소 조회
     */
    public Accommodation findById(Long id) {
        return accommodationRepository.findById(id)
                .orElseThrow(() -> new AccommodationNotFoundException());
    }
}
