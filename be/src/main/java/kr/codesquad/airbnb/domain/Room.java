package kr.codesquad.airbnb.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Long id;

    @OneToMany(mappedBy = "room")
    private final List<Booking> bookings = new ArrayList<>();

    private String name;
    private String image;

    private Integer pricePerNight;
    private Integer maxNumberOfGuest;
    private Double bedroom;
    private Double bed;
    private Double bathroom;

    @OneToMany(mappedBy = "room")
    private final List<RoomAmenity> roomAmenities = new ArrayList<>();

    @Embedded
    private Location location;

    @OneToMany(mappedBy = "room")
    private final List<RoomDiscountTax> roomDiscountTaxes = new ArrayList<>();
}
