package louie.dong.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SearchCountryResponse {

    private String country;
    private String imageUrl;
}
