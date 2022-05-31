package com.codesquad.airbnb.room.entity;

import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.ReviewStat;
import com.codesquad.airbnb.district.District;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.reservation.Reservation;
import com.codesquad.airbnb.room.entity.embeddable.RoomCharge;
import java.util.List;
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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    public enum RoomType {WHOLE_APARTMENT, WHOLE_RESIDENCE}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Integer id;

    private String name;
    private String description;
    private String imagePath;

    @Enumerated(value = EnumType.STRING)
    private RoomType type;

    @Embedded
    private Location location;

    @Embedded
    private RoomCharge charge;

    @Embedded
    private ReviewStat review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id")
    private District district;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private Member host;

    @OneToOne(mappedBy = "room", fetch = FetchType.LAZY)
    private RoomDetail detail;

    @OneToMany(mappedBy = "room")
    private List<Review> reviews;

    @OneToMany(mappedBy = "room")
    private List<RoomImage> images;

    @OneToMany(mappedBy = "room")
    private List<Reservation> reservations;

    public Room(District district, Member host, String name, String description, String imagePath,
        RoomType type, Location location, RoomCharge charge, ReviewStat review) {
        this.district = district;
        this.host = host;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.type = type;
        this.location = location;
        this.charge = charge;
        this.review = review;
    }
}
