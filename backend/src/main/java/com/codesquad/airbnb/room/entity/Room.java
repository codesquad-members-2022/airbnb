package com.codesquad.airbnb.room.entity;

import com.codesquad.airbnb.district.District;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.reservation.Reservation;
import com.codesquad.airbnb.room.entity.embeddable.Charge;
import com.codesquad.airbnb.room.entity.embeddable.ReviewTotal;
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
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    enum RoomType {WHOLE_APARTMENT, WHOLE_RESIDENCE}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Integer id;

    private String name;
    private String description;
    private Point point;

    @Enumerated(value = EnumType.STRING)
    private RoomType type;

    @Embedded
    private Charge charge;

    @Embedded
    private ReviewTotal review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "district_id")
    private District district;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "host_id")
    private Member host;

    @OneToOne(mappedBy = "room", fetch = FetchType.LAZY)
    private RoomDetail info;

    @OneToMany(mappedBy = "room")
    private List<Review> reviews;

    @OneToMany(mappedBy = "room")
    private List<RoomImage> images;

    @OneToMany(mappedBy = "room")
    private List<Reservation> reservations;

}
