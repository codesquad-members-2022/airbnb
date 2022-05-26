package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;


@Entity
@Getter
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "region_name")
    private String name;

    @Column(name = "region_description")
    private String description;

    private String imageUrl;
}
