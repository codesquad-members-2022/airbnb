package codesquad.airbnb.service;

import codesquad.airbnb.domain.Accommodation;
import codesquad.airbnb.domain.Member;
import codesquad.airbnb.domain.Reservation;
import codesquad.airbnb.domain.ReservationPrice;
import codesquad.airbnb.domain.Schedule;
import codesquad.airbnb.dto.AccommodationDto;
import codesquad.airbnb.dto.AccommodationListDto;
import codesquad.airbnb.dto.AccommodationPriceDto;
import codesquad.airbnb.dto.AccommodationPriceListDto;
import codesquad.airbnb.dto.ReservationForm;
import codesquad.airbnb.repository.AccommodationRepository;
import codesquad.airbnb.repository.MemberRepository;
import codesquad.airbnb.repository.ReservationRepository;
import codesquad.airbnb.repository.ScheduleRepository;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccommodationService {

    private final AccommodationRepository accommodationRepository;
    private final MemberRepository memberRepository;
    private final ReservationRepository reservationRepository;
    private final ScheduleRepository scheduleRepository;

    public AccommodationPriceListDto getPricesByStayDate(LocalDate checkInDate, LocalDate checkOutDate, Double latitude, Double longitude) {
        Long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        String point = String.format("POINT(%s %s)", longitude, latitude);

        List<Integer> prices = accommodationRepository.findPricesByStayDate(checkInDate, checkOutDate.plusDays(1), stayDays, point);

        Map<Integer, Integer> countOfPrices = prices.stream().collect(Collectors.toMap(
            price -> price,
            count -> 1,
            (existingCount, newCount) -> existingCount + 1
        ));

        List<AccommodationPriceDto> accommodationPrices = new ArrayList<>();

        for (Integer price : countOfPrices.keySet()) {
            accommodationPrices.add(new AccommodationPriceDto(price, countOfPrices.get(price)));
        }

        return new AccommodationPriceListDto(accommodationPrices);
    }

    public AccommodationListDto getAccommodationInfoByCriteria(LocalDate checkInDate, LocalDate checkOutDate, Integer minimumMoney, Integer maximumMoney, Integer personnel, Double latitude, Double longitude) {
        long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        String point = String.format("POINT(%s %s)", longitude, latitude);

        List<AccommodationDto> accommodation = accommodationRepository.findAllByCriteria(
            point, checkInDate, checkOutDate.plusDays(1), minimumMoney, maximumMoney, personnel, stayDays);

        return new AccommodationListDto(accommodation);
    }

    @Transactional
    public void reserveAccommodation(Long memberId, ReservationForm reservationForm) {
        Long accommodationId = reservationForm.getAccommodationId();
        Integer personnel = reservationForm.getPersonnel();
        LocalDate checkInDate = reservationForm.getCheckInDate();
        LocalDate checkOutDate = reservationForm.getCheckOutDate();

        Member member = memberRepository.findById(memberId).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 회원입니다.");
        });

        Accommodation accommodation = accommodationRepository.findById(accommodationId).orElseThrow(() -> {
            throw new IllegalStateException("존재하지 않는 숙소입니다.");
        });

        checkAvailabilityOfReservation(accommodationId, checkInDate, checkOutDate);

        ReservationPrice reservationPrice = getReservationPrice(reservationForm);

        Reservation reservation = Reservation.createReservation(member, accommodation, reservationPrice,
            personnel, checkInDate, checkOutDate);

        reservationRepository.save(reservation);
    }

    private void checkAvailabilityOfReservation(Long accommodationId, LocalDate checkInDate, LocalDate checkOutDate) {
        List<Schedule> schedules = scheduleRepository.findSchedulesByAccommodation_IdAndStayDateBetween(accommodationId, checkInDate, checkOutDate.plusDays(1));
        long stayDays = checkInDate.until(checkOutDate, ChronoUnit.DAYS) + 1;
        if (schedules.size() != stayDays) {
            throw new IllegalStateException("해당 일정으로는 에약이 불가능합니다.");
        }

        for (Schedule schedule : schedules) {
            schedule.removeVacantRoomQuantity();
        }
    }

    private ReservationPrice getReservationPrice(ReservationForm reservationForm) {
        return ReservationPrice.createReservationPrice(
            reservationForm.getAccommodationCost(), reservationForm.getDiscountAmount(),
            reservationForm.getCleaningFee(), reservationForm.getServiceFee(),
            reservationForm.getTax(), reservationForm.getTotalPrice()
        );
    }
}
