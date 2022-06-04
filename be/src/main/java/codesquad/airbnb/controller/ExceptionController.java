package codesquad.airbnb.controller;

import codesquad.airbnb.dto.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class ExceptionController {

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<ResponseMessage> handleDuplicateUserException(IllegalStateException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.NOT_FOUND, exception.getMessage());

        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }
}
