package kr.codesquad.airbnb.exception;

import kr.codesquad.airbnb.response.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
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

    @ExceptionHandler(BindException.class)
    public ResponseEntity<ErrorResponse> handleBindExceptionException(BindException e) {
        ErrorCode errorCode = makeErrorCode(e.getBindingResult());
        log.error("handleBindExceptionException throw bindException. message = {}", errorCode.getDetail());
        return new ResponseEntity<>(new ErrorResponse(errorCode), errorCode.getHttpStatus());
    }

    private ErrorCode makeErrorCode(BindingResult bindingResult) {
        ErrorCode errorCode = null;

        if (bindingResult.hasErrors()) {
            //유효성체크 어노테이션명
            String bindResultCode = bindingResult.getFieldError().getCode();

            switch (bindResultCode) {
                case "NotNull":
                    errorCode = ErrorCode.INVALID_REQUEST_PARAMETER;
                    break;

                case "typeMismatch":
                    errorCode = ErrorCode.INVALID_FORM_REQUEST_PARAMETER;
                    break;
//                case "FutureOrPresent":
//                    errorCode = ErrorCode.FORBIDDEN_CHECK_IN_DATE_PAST;
//                    break;    checkIn 날짜 과거 설정 검증 개발 편의를 위해 주석처리
            }
        }

        return errorCode;
    }
}
