package com.codesquad.airbnb.reservation;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.StayPeriod;
import com.codesquad.airbnb.common.embeddable.StayTime;
import com.codesquad.airbnb.member.Member;
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
import lombok.NoArgsConstructor;

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
    private StayPeriod stayPeriod;

    @Embedded
    private StayTime stayTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id")
    private Member guest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    public Reservation(Room room, Member guest, Double totalCharge, GuestGroup guestGroup,
        StayPeriod stayPeriod, StayTime stayTime) {
        this.room = room;
        this.guest = guest;
        this.totalCharge = totalCharge;
        this.guestGroup = guestGroup;
        this.stayPeriod = stayPeriod;
        this.stayTime = stayTime;
    }
}
