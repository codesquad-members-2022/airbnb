package kr.codesquad.airbnb.response;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
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

    public String convertToJson() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        return objectMapper.writeValueAsString(this);
    }
}
