package com.ahoo.airbnb.entity;

import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    private String country;
    private String city;
    private String state;
    private String street;
    private String detailAddress;
}
