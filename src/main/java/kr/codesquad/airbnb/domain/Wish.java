package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;

@Entity
@Getter
public class Wish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    private Members members;

    @JoinColumn
    @ManyToOne(fetch = FetchType.LAZY)
    private Lodging lodging;
}
