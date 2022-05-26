package kr.codesquad.airbnb.domain;

import lombok.Getter;

import javax.persistence.*;

//숙소 엔티티와 할인&세금 엔티티의 다대다 연결을 위한 엔티티
@Entity
@Getter
public class RoomDiscountTax {

    @Id
    @GeneratedValue
    @Column(name = "room_discount_tax_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "discount_tax_id")
    private DiscountTax discountTax;
}
