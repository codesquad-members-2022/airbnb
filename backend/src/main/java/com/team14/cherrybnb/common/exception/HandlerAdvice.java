package com.team14.cherrybnb.common.exception;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.locationtech.jts.io.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;

@RestControllerAdvice
public class HandlerAdvice {

    @ExceptionHandler(BusinessException.class)
    private ResponseEntity<ErrorResponse<String>> handleException(BusinessException e) {
        return new ResponseEntity<>(new ErrorResponse<>(e.getMessage()), e.getStatus());
    }

    @ExceptionHandler(IOException.class)
    private ResponseEntity<ErrorResponse<String>> handleException(IOException e) {
        return new ResponseEntity<>(new ErrorResponse<>(e.getMessage()), HttpStatus.BAD_GATEWAY);
    }

    @ExceptionHandler(ParseException.class)
    private ResponseEntity<ErrorResponse<String>> handleException(ParseException e) {
        return new ResponseEntity<>(new ErrorResponse<>(e.getMessage()), HttpStatus.BAD_GATEWAY);
    }
}
