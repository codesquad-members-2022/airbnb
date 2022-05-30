package com.team14.cherrybnb.room.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class ReviewSummary {

    private Long reviewCount;

    private Double averageRating;

}
