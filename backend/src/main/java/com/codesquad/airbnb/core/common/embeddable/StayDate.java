package com.codesquad.airbnb.core.common.embeddable;

import java.time.LocalDate;
import java.util.Objects;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Embeddable
@Access(value = AccessType.FIELD)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class StayDate {

    private LocalDate checkinDate;
    private LocalDate checkoutDate;

    public StayDate(LocalDate checkinDate, LocalDate checkoutDate) {
        if (!isNull() && (checkinDate.isEqual(checkoutDate) || checkinDate.isAfter(checkoutDate))) {
            throw new IllegalArgumentException("체크인 날짜가 체크아웃 날짜와 같거나 늦을 수 없습니다.");
        }

        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
    }

    public boolean isNull() {
        return Objects.isNull(checkinDate) || Objects.isNull(checkoutDate);
    }

}
