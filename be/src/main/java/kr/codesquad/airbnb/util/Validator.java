package kr.codesquad.airbnb.util;

import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;

import java.time.LocalDate;

public class Validator {

    public static void validateCheckOutIsAfterCheckIn(LocalDate checkIn, LocalDate checkOut) {
        if (!checkOut.isAfter(checkIn)) {
            throw new CustomException(ErrorCode.FORBIDDEN_CHECK_OUT_DATE_IS_BEFORE_CHECK_IN);
        }
    }
}
