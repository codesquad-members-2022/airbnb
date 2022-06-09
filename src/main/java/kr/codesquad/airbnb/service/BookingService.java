package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.domain.Members;
import kr.codesquad.airbnb.domain.Reservation;
import kr.codesquad.airbnb.dto.BookingResponse;
import kr.codesquad.airbnb.repository.BookingRepository;
import kr.codesquad.airbnb.repository.LodgingRepository;
import kr.codesquad.airbnb.repository.MemberRepository;
import kr.codesquad.airbnb.request.BookingRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final MemberRepository memberRepository;
    private final LodgingRepository lodgingRepository;

    public BookingResponse bookLodging(Long lodgingId, BookingRequest bookingRequest, String githubId) {
        Lodging lodging = lodgingRepository.findById(lodgingId).orElseThrow();
        Members members = memberRepository.findByGithubId(githubId).orElseThrow();
        Reservation reservation = new Reservation(members, lodging, bookingRequest);
        Reservation save = bookingRepository.save(reservation);
        return new BookingResponse(bookingRepository.findById(save.getId()).orElseThrow());
    }
}
