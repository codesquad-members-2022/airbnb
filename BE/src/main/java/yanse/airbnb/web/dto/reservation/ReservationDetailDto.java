package yanse.airbnb.web.dto.reservation;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import yanse.airbnb.domain.reservation.Reservation;
import yanse.airbnb.domain.room.Address;
import yanse.airbnb.domain.room.RoomInfo;
import yanse.airbnb.web.dto.image.RoomImageDto;

import java.time.LocalDate;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDetailDto {

    private List<RoomImageDto> imageUrl;

    private Address address;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkIn;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkOut;

    private RoomInfo roomInfo;


    public ReservationDetailDto(Reservation reservation, List<RoomImageDto> roomImages){
        this.imageUrl = roomImages;
        this.address = reservation.getRoom().getAddress();
        this.checkIn = reservation.getCheckInDateTime();
        this.checkOut = reservation.getCheckOutDateTime();
        this.roomInfo = reservation.getRoom().getRoomInfo();
    }
}
