package com.ahoo.airbnb.oauth;

import com.ahoo.airbnb.oauth.dtos.UserProfileResponse;
import java.util.Arrays;
import java.util.Map;

public enum OAuthAttributes {
	GITHUB("github") {
		@Override
		public UserProfileResponse of(Map<String, Object> attributes) {
			return new UserProfileResponse(
				String.valueOf(attributes.get("id")),
				String.valueOf(attributes.get("email")),
				String.valueOf(attributes.get("name")),
				String.valueOf(attributes.get("avatar_url"))
			);
		}
	};

	private final String providerName;

	OAuthAttributes(String name) {
		this.providerName = name;
	}

	public static UserProfileResponse extract(String providerName, Map<String, Object> attributes) {
		return Arrays.stream(values())
			.filter(provider -> providerName.equals(provider.providerName))
			.findFirst()
			.orElseThrow(IllegalArgumentException::new)
			.of(attributes);
	}

	public abstract UserProfileResponse of(Map<String, Object> attributes);
}
