package kr.codesquad.airbnb.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;

@Entity
@Getter
public class Lodging {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private Double rating;
    private int review;
    private Condition condition;
    private PropertyType propertyType;
    private int maxGuest;
    private int bedroomCount;
    private int bedCount;
    private int bathroomCount;
    private String description;
    private Long price;
    private String type;
    private String hostName;
    private double latitude;
    private double longitude;
    private String mainImageUrl;

    @JoinColumn
    @OneToOne(fetch = FetchType.LAZY)
    private Region region;
}
