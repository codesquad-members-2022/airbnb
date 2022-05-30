package com.team14.cherrybnb.common.domain;


import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private Long id;

    private String allAddress;

    private String state;

    private String city;

    private String street;

    private String zipcode;

    private Point coordinate;

    public Address(String allAddress, String state, String city, String street, String zipcode, Point coordinate) {
        this.allAddress = allAddress;
        this.state = state;
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
        this.coordinate = coordinate;
    }
}
