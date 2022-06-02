package com.ahoo.airbnb.entity;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Address {

    private String country;
    private String city;
    private String state;
    private String street;
    private String detailAddress;
}
