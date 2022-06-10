package team18.airbnb.reservation;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import lombok.RequiredArgsConstructor;
import team18.airbnb.domain.Reservation;
import team18.airbnb.reservation.dto.UserReservationDto;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping("/reservations")
    public ResponseEntity<List<UserReservationDto>> myReservation() {

        List<Reservation> findReservationsByUsername = reservationService.findByUsername();
        List<UserReservationDto> reservations = reservationService.createUserReservationDto(findReservationsByUsername);

        return ResponseEntity.ok(reservations);
    }
}
