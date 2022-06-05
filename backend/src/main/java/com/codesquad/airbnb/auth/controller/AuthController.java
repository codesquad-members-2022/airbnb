package com.codesquad.airbnb.auth.controller;

import org.springframework.http.ResponseEntity;

public interface AuthController {

    ResponseEntity<Void> login();

    ResponseEntity<Void> callback(String code);

}
