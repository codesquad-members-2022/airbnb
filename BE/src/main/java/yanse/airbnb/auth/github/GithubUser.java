package yanse.airbnb.auth.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import yanse.airbnb.auth.dto.AccessToken;
import yanse.airbnb.domain.member.Members;

@Getter
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class GithubUser {

	@JsonProperty("login")
	private String githubId;

	private String email;

	private String name;

	public Members toEntity(AccessToken accessToken) {
		return Members.builder()
			.githubId(githubId)
			.membersName(name)
			.accessToken(accessToken)
			.build();
	}

}
