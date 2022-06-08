package team18.airbnb.search;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team18.airbnb.domain.Accommodation;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchRepository searchRepository;

    public List<Accommodation> findTest(LocalDate checkinTime, LocalDate checkoutTime, int minPrice, int maxPrice, int maxGuest) {

        return searchRepository.findTest(checkinTime, checkoutTime, minPrice, maxPrice, maxGuest);
    }
}
