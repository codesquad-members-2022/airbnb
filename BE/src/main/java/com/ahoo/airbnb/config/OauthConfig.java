package com.ahoo.airbnb.config;

import com.ahoo.airbnb.oauth.MemoryProviderRepository;
import com.ahoo.airbnb.oauth.OAuthAdapter;
import com.ahoo.airbnb.oauth.OAuthProperties;
import com.ahoo.airbnb.oauth.OAuthProvider;
import com.ahoo.airbnb.oauth.ProviderRepository;
import java.util.Map;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(OAuthProperties.class)
public class OauthConfig {

	private final OAuthProperties properties;

	public OauthConfig(OAuthProperties properties) {
		this.properties = properties;
	}

	@Bean
	public ProviderRepository providerRepository() {
		Map<String, OAuthProvider> oauthProviders = OAuthAdapter.getOauthProviders(properties);
		return new MemoryProviderRepository(oauthProviders);
	}
}
