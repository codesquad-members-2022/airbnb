package com.ahoo.airbnb.oauth.dtos;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.MemberType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileResponse {

	private String providerName;
	private String oAuthId;
	private String email;
	private String name;
	private String profileImageUrl;

	public Member toEntity() {
		return new Member(
			null,
			name,
			email,
			null,
			profileImageUrl,
			providerName,
			oAuthId,
			null,
			null,
			MemberType.GUEST
			);
	}
}
