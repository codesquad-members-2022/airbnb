package kr.codesquad.airbnb.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class DiscountTax {

    @Id
    @GeneratedValue
    @Column(name = "discount_tax_id")
    private Long id;

    private String name;
    private Integer rate;

    @OneToMany(mappedBy = "discountTax")
    private List<RoomDiscountTax> roomDiscountTax = new ArrayList<>();
}
