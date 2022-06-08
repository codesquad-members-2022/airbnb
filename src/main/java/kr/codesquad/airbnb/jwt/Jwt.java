package kr.codesquad.airbnb.jwt;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class Jwt {
    private final String jwt;

    @Override
    public String toString() {
        return "Jwt{" +
            "jwt='" + jwt + '\'' +
            '}';
    }
}
