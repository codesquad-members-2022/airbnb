package kr.codesquad.airbnb.domain;

import kr.codesquad.airbnb.dto.BookingRoomRequest;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    private LocalDate checkIn;
    private LocalDate checkOut;

    @Embedded
    private Guest guest;

    private Integer totalPrice;
    private LocalDateTime createdAt;

    public Booking(Member member, Room room, BookingRoomRequest bookingRoomRequest) {
        this.member = member;
        this.room = room;
        checkIn = bookingRoomRequest.getCheckIn();
        checkOut = bookingRoomRequest.getCheckOut();
        guest = new Guest(bookingRoomRequest.getAdults(), bookingRoomRequest.getChildren(), bookingRoomRequest.getInfants());
        totalPrice = bookingRoomRequest.getTotalPrice();
        createdAt = LocalDateTime.now();
    }
}
