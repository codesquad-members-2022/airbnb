package com.ahoo.airbnb.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "member")
public class Member extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String email;
	private String password;
	private String profileImageUrl;
	private String providerName;
	private String oauthId;
	private String accessToken;
	private String refreshToken;

	@Enumerated(EnumType.STRING)
	private MemberType type;

	public Member updateProfile(String email, String name, String profileImageUrl) {
		this.email = email;
		this.name = name;
		this.profileImageUrl = profileImageUrl;
		return this;
	}

	public void updateToken(String accessToken, String refreshToken) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
