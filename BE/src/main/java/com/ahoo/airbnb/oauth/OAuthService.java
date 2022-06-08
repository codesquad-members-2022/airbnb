package com.ahoo.airbnb.oauth;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.OAuth;
import com.ahoo.airbnb.member.MemberRepository;
import com.ahoo.airbnb.oauth.dtos.OAuthTokenResponse;
import com.ahoo.airbnb.oauth.dtos.SignInResponse;
import com.ahoo.airbnb.oauth.dtos.UserProfileResponse;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class OAuthService {

	private final ProviderRepository providerRepository;
	private final MemberRepository memberRepository;
	private final JwtTokenProvider jwtTokenProvider;

	SignInResponse signIn(String providerName, String code) {
		OAuth provider = providerRepository.findById(providerName).get();

		OAuthTokenResponse tokenResponse = WebClient.create()
			.post()
			.uri(provider.getProviderTokenUri())
			.headers(header -> {
				header.setBasicAuth(provider.getUserClientId(), provider.getUserClientSecret());
				header.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
				header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
				header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
			})
			.bodyValue(tokenRequest(code, provider))
			.retrieve()
			.bodyToMono(OAuthTokenResponse.class)
			.block();

		UserProfileResponse userProfile = getUserProfileResponse(providerName, tokenResponse, provider);

		Member member = saveOrUpdate(userProfile);

		String accessToken = jwtTokenProvider.createAccessToken(String.valueOf(member.getId()));
		String refreshToken = jwtTokenProvider.createRefreshToken();
		member.updateToken(accessToken, refreshToken);
		memberRepository.save(member);

		return SignInResponse.from(member);
	}

	private Member saveOrUpdate(UserProfileResponse userProfile) {
		Member member = memberRepository.findByOAuthId(userProfile.getOAuthId())
			.map(entity -> entity.updateProfile(
				userProfile.getEmail(), userProfile.getName(), userProfile.getProfileImageUrl()))
			.orElseGet(userProfile::toEntity);
		return memberRepository.save(member);
	}

	private Map<String, Object> getUserAttributes(OAuth oAuth, OAuthTokenResponse tokenResponse) {
		return WebClient.create()
			.get()
			.uri(oAuth.getProviderUserInfoUri())
			.headers(header -> header.setBearerAuth(tokenResponse.getAccessToken()))
			.retrieve()
			.bodyToMono(new ParameterizedTypeReference<Map<String, Object>>() {
			})
			.block();
	}

	private UserProfileResponse getUserProfileResponse(String providerName, OAuthTokenResponse oAuthTokenResponse,
		OAuth oAuth) {
		Map<String, Object> userAttributes = getUserAttributes(oAuth, oAuthTokenResponse);

		return OAuthAttributes.extract(providerName, userAttributes);
	}

	private MultiValueMap<String, String> tokenRequest(String code, OAuth oAuth) {
		MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
		formData.add("code", code);
		formData.add("grant_type", "authorization_code");
		formData.add("redirect_uri", oAuth.getUserRedirectUri());
		formData.add("client_id", oAuth.getUserClientId());
		formData.add("client_secret", oAuth.getUserClientSecret());
		return formData;
	}
}
