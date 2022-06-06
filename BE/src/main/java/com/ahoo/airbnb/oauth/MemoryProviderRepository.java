package com.ahoo.airbnb.oauth;

import java.util.HashMap;
import java.util.Map;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository
@Primary
public class MemoryProviderRepository implements ProviderRepository {

	private final Map<String, OAuthProvider> providers;

	public MemoryProviderRepository(Map<String, OAuthProvider> providers) {
		this.providers = new HashMap<>(providers);
	}

	@Override
	public OAuthProvider findByProviderName(String name) {
		return providers.get(name);
	}
}
