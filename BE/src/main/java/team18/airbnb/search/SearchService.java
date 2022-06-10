package team18.airbnb.search;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import lombok.RequiredArgsConstructor;
import team18.airbnb.domain.Accommodation;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final SearchRepository searchRepository;

    public List<Accommodation> findAccommodationBy(Long regionId, LocalDate checkinDate, LocalDate checkoutDate, int minPrice, int maxPrice, int maxGuest) {

        return searchRepository.findAccommodationBy(regionId, checkinDate, checkoutDate, minPrice, maxPrice, maxGuest);
    }
}
