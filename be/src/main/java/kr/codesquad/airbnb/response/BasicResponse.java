package kr.codesquad.airbnb.response;

import java.time.LocalDateTime;

public abstract class BasicResponse {

    protected final LocalDateTime timestamp = LocalDateTime.now();
    protected int statusCode;
    protected String statusName;
    protected String message;
}
