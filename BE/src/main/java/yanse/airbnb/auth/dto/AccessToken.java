package yanse.airbnb.auth.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;

@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@Getter
public class AccessToken {

	private String accessToken;

	private String tokenType;

	private String scope;

	public String authorizationHeaderValue() {
		return tokenType + " " + accessToken;
	}
}
