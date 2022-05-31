package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.reservation.embeddable.StayDateTime;
import com.codesquad.airbnb.room.entity.Room;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Integer id;

    private Double totalCharge;

    @Embedded
    private GuestGroup guestGroup;

    @Embedded
    private StayDateTime stayDateTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id")
    private Member guest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    public Reservation(Room room, Member guest, Double totalCharge, GuestGroup guestGroup,
        StayDateTime stayDateTime) {
        this.room = room;
        this.guest = guest;
        this.totalCharge = totalCharge;
        this.guestGroup = guestGroup;
        this.stayDateTime = stayDateTime;
    }

}
