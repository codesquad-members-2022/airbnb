package kr.codesquad.airbnb.domain;

import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
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

    public Wish(Members members, Lodging lodging) {
        this.members = members;
        this.lodging = lodging;
    }

    @Override
    public String toString() {
        return "Wish{" +
            "id=" + id +
            ", members=" + members +
            ", lodging=" + lodging +
            '}';
    }
}
