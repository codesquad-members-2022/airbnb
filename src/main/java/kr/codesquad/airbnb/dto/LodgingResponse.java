package kr.codesquad.airbnb.dto;

import java.util.ArrayList;
import java.util.List;
import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LodgingResponse {

    private Long id;
    private String Name;
    private Double rating;
    private int review;
    private Long price;
    private Long totalPrice;
    private String imageUrl;
    private boolean wish;
    private double latitude;
    private double longitude;

    public LodgingResponse(Lodging lodging) {
        this.id = lodging.getId();
        this.Name = lodging.getName();
        this.rating = lodging.getRating();
        this.review = lodging.getReview();
        this.price = lodging.getPrice();
//        this.totalPrice = totalPrice;
        this.imageUrl = initMainImageUrl(lodging);
//        this.wish = lodging.get
        this.latitude = lodging.getLatitude();
        this.longitude = lodging.getLongitude();
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
