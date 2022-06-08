package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Lodging {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lodging_name")
    private String name;

    @OneToOne(mappedBy = "lodging")
    private Address address;

    private Double rating;
    private int review;

    @Enumerated(EnumType.STRING)
    private PlaceType placeType;

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;
    private int maxGuest;
    private int bedroomCount;
    private int bedCount;
    private int bathroomCount;

    @Column(name = "lodging_description")
    private String description;
    private Long price;

    private String hostName;
    private String hostImage;
    private double latitude;
    private double longitude;

    @OneToMany(mappedBy = "lodging")
    private List<Images> images;

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    private Region region;

    @OneToMany(mappedBy = "lodging")
    private List<Reservation> reservationList = new ArrayList<>();

}
