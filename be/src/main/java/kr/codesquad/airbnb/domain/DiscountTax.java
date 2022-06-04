package kr.codesquad.airbnb.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DiscountTax {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "discount_tax_id")
    private Long id;

    private String name;
    private Integer rate;

    @OneToMany(mappedBy = "discountTax")
    private final List<RoomDiscountTax> roomDiscountTax = new ArrayList<>();
}
