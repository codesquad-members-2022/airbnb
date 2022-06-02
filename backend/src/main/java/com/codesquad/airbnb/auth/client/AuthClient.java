package com.codesquad.airbnb.auth.client;

public interface AuthClient<T, U> {

    T getToken(String code);

    U getUser(String accessToken);
}
