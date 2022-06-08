package com.team14.cherrybnb.common.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class HandlerAdvice {

    @ExceptionHandler(BusinessException.class)
    private ResponseEntity<ErrorResponse<String>> handleException(BusinessException e) {
        return new ResponseEntity<>(new ErrorResponse<>(e.getMessage()), e.getStatus());
    }
}
