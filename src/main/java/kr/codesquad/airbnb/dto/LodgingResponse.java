package kr.codesquad.airbnb.dto;

import java.util.ArrayList;
import java.util.List;

import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;


@Getter
@AllArgsConstructor
@Builder
public class LodgingResponse {

    private Long id;
    private String Name;
    private Double rating;
    private int review;
    private Long price;
    private int totalPrice;
    private String imageUrl;
    private boolean wish;
    private double latitude;
    private double longitude;
    private List<String> imageUrls;

    public LodgingResponse(Lodging lodging) {
        this.id = lodging.getId();
        this.Name = lodging.getName();
        this.rating = lodging.getRating();
        this.review = lodging.getReview();
        this.price = lodging.getPrice();
//        this.wish = lodging.get
        this.latitude = lodging.getLatitude();
        this.longitude = lodging.getLongitude();
        this.imageUrls = initMainImageUrl(lodging);
    }


    private List<String> initMainImageUrl(Lodging lodging) {
        List<String> imageUrls = new ArrayList<>();
        for (Images image : lodging.getImages()) {
               imageUrls.add(image.getImageUrl());
            }
        return this.imageUrls = imageUrls;
    }
}
