package kr.codesquad.airbnb.exception;

import kr.codesquad.airbnb.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = {CustomException.class})
    private ResponseEntity<ErrorResponse> handleCustomException(CustomException e) {
        ErrorCode errorCode = e.getErrorCode();
        log.error("handleCustomException throw customException. message = {}", errorCode.getDetail());

        return new ResponseEntity<>(new ErrorResponse(errorCode), errorCode.getHttpStatus());
    }

    @ExceptionHandler(value = {BindException.class})
    public ResponseEntity<ErrorResponse> handleBindExceptionException(BindException e) {
        String message = e.getBindingResult().getFieldError().getDefaultMessage();
        log.error("handleBindExceptionException throw bindException. message = {}", message);

        return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST, message), HttpStatus.BAD_REQUEST);
    }
}
