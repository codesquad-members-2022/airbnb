package kr.codesquad.airbnb.response;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public abstract class BasicResponse {

    protected final LocalDateTime timestamp = LocalDateTime.now();
    protected int statusCode;
    protected String statusName;
    protected String message;
}
