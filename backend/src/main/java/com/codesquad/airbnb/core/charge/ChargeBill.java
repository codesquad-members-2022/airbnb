package com.codesquad.airbnb.core.charge;

import com.codesquad.airbnb.core.charge.discount.DiscountBill;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ChargeBill {

    private int nights;
    private int lodgingPrice;
    private int cleaningPrice;

    private int serviceCommission;
    private int taxCommission;

    private List<DiscountBill> discounts;

    public int getTotalPrice() {
        return getTotalSum() - getTotalDiscount();
    }

    private int getTotalSum() {
        return lodgingPrice * nights + cleaningPrice + serviceCommission + taxCommission;
    }

    private int getTotalDiscount() {
        return discounts.stream()
            .map(DiscountBill::getDiscountPrice)
            .reduce(Integer::sum)
            .orElse(0);
    }

}
