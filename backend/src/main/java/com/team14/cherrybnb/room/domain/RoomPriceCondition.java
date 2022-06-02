package com.team14.cherrybnb.room.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Embeddable
@Getter
public class RoomPriceCondition {

    private BigDecimal weekdayPrice;

    private BigDecimal weekendPrice;

    private BigDecimal weeklyDiscount;

    private BigDecimal cleaningFee;

    private BigDecimal serviceCommission;

    private BigDecimal tax;

    public BigDecimal calculateAvgPricePerDay() {
        return weekdayPrice
                .add(weekendPrice)
                .divide(new BigDecimal(2), 2, RoundingMode.FLOOR);
    }
}
