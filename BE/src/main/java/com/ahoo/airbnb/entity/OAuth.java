package com.ahoo.airbnb.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "oauth")
public class OAuth {

	@Id
	private String id;

	private String userClientId;

	private String userClientSecret;

	private String userRedirectUri;

	private String providerTokenUri;

	private String providerUserInfoUri;
}
