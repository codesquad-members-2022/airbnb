package yanse.airbnb.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.domain.image.Image;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ImageListDto {
    private String imageUrl;
    private String title;
    private String content;

    public ImageListDto(Image image) {
        this.imageUrl = image.getUrl();
        this.title = image.getTitle();
        this.content = image.getTitle();
    }
}
