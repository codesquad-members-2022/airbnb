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

    private String name;

    @Embedded
    private RoomInfo roomInfo;

    private String description;

    @Embedded
    private RoomPriceCondition roomPriceCondition;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<RoomImage> roomImages;

    public Room(String name, RoomInfo roomInfo, String description,
                RoomPriceCondition roomPriceCondition, Address address) {
        this.name = name;
        this.roomInfo = roomInfo;
        this.description = description;
        this.roomPriceCondition = roomPriceCondition;
        this.address = address;
    }
}
