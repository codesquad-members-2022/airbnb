package yanse.airbnb.web.dto.reservation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.room.Address;
import yanse.airbnb.domain.room.Room;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDto {

    private Long reservationId;

    private String imageUrl;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkOut;

    private Address address;

    private String roomName;

    public ReservationDto(Reservation reservation) {
        this.reservationId = reservation.getId();
        this.imageUrl = reservation.getRoom().getRoomImage().stream().findFirst().orElseThrow(RuntimeException::new).getUrl();
        this.checkIn = reservation.getCheckInDateTime();
        this.checkOut = reservation.getCheckOutDateTime();
        this.address = reservation.getRoom().getAddress();
        this.roomName = reservation.getRoom().getRoomName();
    }

}
