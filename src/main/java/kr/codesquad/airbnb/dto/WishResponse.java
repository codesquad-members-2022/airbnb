package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import kr.codesquad.airbnb.domain.Wish;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class WishResponse {

    private Long lodgingId;
    private String name;
    private Double rating;
    private int review;
    private Long price;
    private String imageUrl;

    public WishResponse(Wish wish) {
        this.lodgingId = wish.getLodging().getId();
        this.name = wish.getLodging().getName();
        this.rating = wish.getLodging().getRating();
        this.review = wish.getLodging().getReview();
        this.price = wish.getLodging().getPrice();
        this.imageUrl = initMainImageUrl(wish.getLodging());
    }

    private String initMainImageUrl(Lodging lodging) {
        for (Images image : lodging.getImages()) {
            if (image.isMainImage() == true) {
                return image.getImageUrl();
            }
        }
        return null;
    }
}
