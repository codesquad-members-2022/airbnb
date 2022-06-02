package com.codesquad.airbnb.auth.domain;

import com.codesquad.airbnb.core.member.Member;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class GithubUser {

    @JsonProperty("login")
    private String githubId;

    @JsonProperty("name")
    private String username;

    @JsonProperty("avatar_url")
    private String imagePath;

    public Member toMember() {
        return new Member(username, githubId, imagePath);
    }
}
