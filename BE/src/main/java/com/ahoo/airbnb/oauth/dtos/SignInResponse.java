package com.ahoo.airbnb.oauth.dtos;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.MemberType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SignInResponse {

	private Long id;
	private String name;
	private String email;
	private String profileImageUrl;
	private MemberType memberType;
	private String tokenType;
	private String accessToken;
	private String refreshToken;

	public static SignInResponse from(Member member) {
		return new SignInResponse(
			member.getId(),
			member.getName(),
			member.getEmail(),
			member.getProfileImageUrl(),
			member.getType(),
			"Bearer",
			member.getAccessToken(),
			member.getRefreshToken()
		);
	}
}
