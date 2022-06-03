package com.codesquad.airbnb.auth.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@Getter
@Setter
@Component
@RequestScope
@Accessors(fluent = true)
@ToString
public class UserDetail {

    private Integer id;
    private String name;
    private String githubId;

}
