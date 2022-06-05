package com.codesquad.airbnb.exception.unchecked;

import com.codesquad.airbnb.exception.ErrorCode;

public class NotAvailableException extends BusinessException {

    public NotAvailableException(ErrorCode errorCode) {
        super(errorCode);
    }

}
