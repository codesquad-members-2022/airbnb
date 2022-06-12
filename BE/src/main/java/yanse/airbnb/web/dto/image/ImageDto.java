package yanse.airbnb.web.dto.image;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ImageDto {
    private String imageUrl;
    private String title;
    private String content;
}
