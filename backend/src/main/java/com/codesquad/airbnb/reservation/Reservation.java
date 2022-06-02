package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.common.embeddable.StayTime;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.room.entity.Room;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Reservation {

    public enum ReservationState {BOOKED, CANCELED, COMPLETED}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Integer id;

    private Double totalCharge;

    @Embedded
    private GuestGroup guestGroup;

    @Embedded
    private StayDate stayDate;

    @Embedded
    private StayTime stayTime;

    @Enumerated(value = EnumType.STRING)
    private ReservationState state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id")
    private Member guest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    public Reservation(Member guest, Room room, Double totalCharge, GuestGroup guestGroup,
        StayDate stayDate, StayTime stayTime, ReservationState state) {
        this.guest = guest;
        this.room = room;
        this.totalCharge = totalCharge;
        this.guestGroup = guestGroup;
        this.stayDate = stayDate;
        this.stayTime = stayTime;
        this.state = state;
    }

    public void cancel() {
        if (this.state != ReservationState.BOOKED) {
            throw new IllegalStateException("예약된 상태가 아니므로 취소할 수 없습니다.");
        }

        this.state = ReservationState.CANCELED;
    }
}
