package com.codesquad.airbnb.common.embeddable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewStat {

    @Column(name = "review_score")
    private Double score;

    @Column(name = "review_count")
    private Integer count;

}
