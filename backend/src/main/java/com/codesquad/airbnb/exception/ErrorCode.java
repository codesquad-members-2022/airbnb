package com.codesquad.airbnb.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ErrorCode {
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "멤버 정보가 존재하지 않습니다."),
    ROOM_NOT_FOUND(HttpStatus.NOT_FOUND, "숙소 정보가 존재하지 않습니다."),
    RESERVATION_NOT_FOUND(HttpStatus.NOT_FOUND, "예약 정보가 존재하지 않습니다."),
    WISH_NOT_FOUND(HttpStatus.NOT_FOUND, "위시리스트 정보가 존재하지 않습니다."),
    TOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, "토큰 정보가 존재하지 않습니다."),
    GUEST_NOT_AVAILABLE(HttpStatus.NOT_ACCEPTABLE, "해당 인원으로 예약을 할 수 없습니다."),
    DATE_NOT_AVAILABLE(HttpStatus.NOT_ACCEPTABLE, "해당 날짜에 예약을 할 수 없습니다."),
    MEMBER_NOT_IDENTIFIED(HttpStatus.NOT_ACCEPTABLE, "멤버 정보가 일치하지 않습니다."),
    RESERVATION_NOT_CANCELED(HttpStatus.NOT_ACCEPTABLE, "예약된 상태가 아니므로 취소할 수 없습니다."),
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 오류가 발생했습니다.");

    private final HttpStatus status;
    private final String message;

    ErrorCode(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

}
