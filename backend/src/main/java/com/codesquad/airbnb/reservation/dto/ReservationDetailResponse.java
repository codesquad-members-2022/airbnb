package com.codesquad.airbnb.reservation.dto;

import com.codesquad.airbnb.reservation.Reservation;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.Room.RoomType;
import com.codesquad.airbnb.room.entity.RoomImage;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ReservationDetailResponse {

    private Integer roomId;
    private String name;
    private RoomType type;
    private String address;
    private String hostName;
    private List<String> imagePaths;
    private Integer price;
    private Integer numberGuest;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime checkinDateTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime checkoutDateTime;

    public static ReservationDetailResponse from(Reservation reservation) {
        Room room = reservation.getRoom();
        List<String> imagePaths = room.getImages().stream()
            .map(RoomImage::getPath)
            .collect(Collectors.toList());

        return new ReservationDetailResponse(
            room.getId(),
            room.getName(),
            room.getType(),
            room.getDistrict().getAddress(),
            room.getHost().getName(),
            imagePaths,
            reservation.getTotalPrice(),
            reservation.getGuestGroup().getNumberGuest(),
            LocalDateTime.of(
                reservation.getStayDate().getCheckinDate(),
                reservation.getStayTime().getCheckinTime()
            ),
            LocalDateTime.of(
                reservation.getStayDate().getCheckoutDate(),
                reservation.getStayTime().getCheckoutTime()
            )
        );
    }
}
