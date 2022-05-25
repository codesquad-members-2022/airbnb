package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;

@Entity
@Getter
public class Lodging {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lodging_name")
    private String Name;
    private String address;
    private Double rating;
    private int review;

    @Enumerated(EnumType.STRING)
    private Conditions conditions;

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;
    private int maxGuest;
    private int bedroomCount;
    private int bedCount;
    private int bathroomCount;

    @Column(name = "l_description")
    private String description;
    private Long price;

    @Column(name = "room_type")
    private String type;
    private String hostName;
    private double latitude;
    private double longitude;
    private String mainImageUrl;

    @JoinColumn
    @OneToOne
    private Region region;
}
