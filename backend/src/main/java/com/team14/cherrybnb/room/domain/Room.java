package com.team14.cherrybnb.room.domain;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.common.domain.Address;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Long id;

    @Embedded
    private RoomInfo roomInfo;

    private String description;

    @Embedded
    private RoomPriceCondition roomPriceCondition;

    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "room")
    private List<RoomImage> roomImages;
}
