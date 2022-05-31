package kr.codesquad.airbnb.response;

import kr.codesquad.airbnb.exception.ErrorCode;

public class ErrorResponse extends BasicResponse {

    public ErrorResponse(ErrorCode errorCode) {
        this.statusCode = errorCode.getHttpStatus().value();
        this.statusName = errorCode.getHttpStatus().name();
        this.message = errorCode.getDetail();
    }
}
