package com.codesquad.airbnb.reservation;

import java.time.LocalDateTime;
import javax.persistence.Embeddable;

@Embeddable
public class StayPeriod {

    private LocalDateTime checkinDateTime;
    private LocalDateTime checkoutDateTime;

}
