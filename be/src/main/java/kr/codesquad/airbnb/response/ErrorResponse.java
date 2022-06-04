package kr.codesquad.airbnb.response;

import kr.codesquad.airbnb.exception.ErrorCode;
import org.springframework.http.HttpStatus;

public class ErrorResponse extends BasicResponse {

    public ErrorResponse(ErrorCode errorCode) {
        this.statusCode = errorCode.getHttpStatus().value();
        this.statusName = errorCode.getHttpStatus().name();
        this.message = errorCode.getDetail();
    }

    public ErrorResponse(HttpStatus httpStatus, String message) {
        this.statusCode = httpStatus.value();
        this.statusName = httpStatus.name();
        this.message = message;
    }

    public String convertToJson() {
        StringBuilder sb = new StringBuilder();

        sb.append("{\"timestamp\": \"" + this.timestamp + "\",\n");
        sb.append("\"statusCode\": \"" + this.statusCode + "\",\n");
        sb.append("\"statusName\": \"" + this.statusName + "\",\n");
        sb.append("\"message\": \"" + this.message + "\"}");

        return sb.toString();
    }
}
