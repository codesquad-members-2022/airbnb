package com.team14.cherrybnb.room.dto;

import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
public class SearchCondition {

    private LocalDateTime checkIn;

    private LocalDateTime checkOut;

    private BigDecimal minPrice;

    private BigDecimal maxPrice;

    private int guestCount;

    private String location;
}
