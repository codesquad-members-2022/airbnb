package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;

@Entity
@Getter
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @OneToOne(fetch = FetchType.LAZY)
    private Lodging lodging;

    private String country;
    private String city;
    private String town;
    private String village;
}
