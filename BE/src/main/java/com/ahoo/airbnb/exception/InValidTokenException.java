package com.ahoo.airbnb.exception;

public class InValidTokenException extends RuntimeException {

    public InValidTokenException(String message) {
        super(message);
    }
}
