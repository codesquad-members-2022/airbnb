package com.ahoo.airbnb.oauth;

import com.ahoo.airbnb.oauth.dtos.UserProfileResponse;
import java.util.Arrays;
import java.util.Map;

public enum OAuthAttributes {
	GITHUB("github") {
		@Override
		public UserProfileResponse of(Map<String, Object> attributes) {
			return new UserProfileResponse(
				getProviderName(),
				String.valueOf(attributes.get("id")),
				String.valueOf(attributes.get("email")),
				String.valueOf(attributes.get("name")),
				String.valueOf(attributes.get("avatar_url"))
			);
		}
	},
	KAKAO("kakao") {
		@Override
		public UserProfileResponse of(Map<String, Object> attributes) {
			Map<String, Object> kakaoAccount = Map.of("kakao_account", attributes.get("kakao_account"));
			Map<String, Object> profile = Map.of("profile", kakaoAccount.get("profile"));
			return new UserProfileResponse(
				getProviderName(),
				String.valueOf(attributes.get("id")),
				String.valueOf(kakaoAccount.get("email")),
				String.valueOf(profile.get("nickname")),
				String.valueOf(profile.get("profile_image_url"))
				);
		}
	},
	NAVER("naver") {
		@Override
		public UserProfileResponse of(Map<String, Object> attributes) {
			Map<String, Object> response = Map.of("response", attributes.get("response"));
			return new UserProfileResponse(
				getProviderName(),
				String.valueOf(response.get("id")),
				String.valueOf(response.get("email")),
				String.valueOf(response.get("name")),
				String.valueOf(response.get("profile_image"))
			);
		}
	};

	private final String providerName;

	public String getProviderName() {
		return this.providerName;
	}

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
