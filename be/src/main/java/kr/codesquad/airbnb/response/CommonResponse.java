package kr.codesquad.airbnb.response;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CommonResponse<T> extends BasicResponse {

    private T data;

    private CommonResponse(HttpStatus httpStatus, String message) {
        this.statusCode = httpStatus.value();
        this.statusName = httpStatus.name();
        this.message = message;
    }

    private CommonResponse(HttpStatus httpStatus, String message, T data) {
        this.statusCode = httpStatus.value();
        this.statusName = httpStatus.name();
        this.message = message;
        this.data = data;
    }

    public static CommonResponse noContentCommonResponse() {
        return new CommonResponse(HttpStatus.OK, HttpStatus.NO_CONTENT.getReasonPhrase());
    }

    public static CommonResponse okCommonResponse(Object data) {
        return new CommonResponse(HttpStatus.OK, HttpStatus.OK.getReasonPhrase(), data);
    }
}
