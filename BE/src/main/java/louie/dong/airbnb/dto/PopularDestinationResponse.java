package louie.dong.airbnb.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PopularDestinationResponse {

    private String name;
    private String imageUrl;
    private String distance;
}
