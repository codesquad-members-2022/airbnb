package com.ahoo.airbnb.oauth;

public interface ProviderRepository {

	OAuthProvider findByProviderName(String name);
}
