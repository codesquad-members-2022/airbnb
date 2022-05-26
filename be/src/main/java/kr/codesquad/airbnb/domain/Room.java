package kr.codesquad.airbnb.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Room {

    @Id
    @GeneratedValue
    @Column(name = "room_id")
    private Long id;

    @OneToMany(mappedBy = "room")
    private List<Booking> bookings = new ArrayList<>();

    private String name;
    private String image;

    private Integer pricePerNight;
    private Integer maxNumberOfGuest;
    private Double bedroom;
    private Double bed;
    private Double bathroom;

    @OneToMany(mappedBy = "room")
    private List<RoomAmenity> roomAmenities = new ArrayList<>();

    @Embedded
    private Location location;

    @OneToMany(mappedBy = "room")
    private List<RoomDiscountTax> roomDiscountTaxes = new ArrayList<>();
}
