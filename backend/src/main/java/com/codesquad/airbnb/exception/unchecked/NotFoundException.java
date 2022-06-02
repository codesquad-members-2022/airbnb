package com.codesquad.airbnb.exception.unchecked;

import com.codesquad.airbnb.exception.ErrorCode;

public class NotFoundException extends BusinessException {

    public NotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }

}
