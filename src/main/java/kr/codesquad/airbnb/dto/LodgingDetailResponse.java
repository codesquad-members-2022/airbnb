package kr.codesquad.airbnb.dto;

import java.util.ArrayList;
import java.util.List;
import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import lombok.Getter;

@Getter
public class LodgingDetailResponse {

    private Long id;
    private String name;
    private String country;
    private String city;
    private String town;
    private String village;
    private Double rating;
    private int review;

    private String placeType;
    private int maxGuest;
    private int bedroomCount;
    private int bedCount;
    private int bathroomCount;

    private String description;
    private Long price;
    private String propertyType;
    private String hostName;
    private String hostImageUrl;
    private String mainImageUrl;
    private List<String> subImageUrls;

    public LodgingDetailResponse(Lodging lodging) {
        this.id = lodging.getId();
        this.name = lodging.getName();
        this.country = lodging.getAddress().getCountry();
        this.city = lodging.getAddress().getCity();
        this.town = lodging.getAddress().getTown();
        this.village = lodging.getAddress().getVillage();
        this.rating = lodging.getRating();
        this.review = lodging.getReview();
        this.placeType = lodging.getPlaceType().getName();
        this.maxGuest = lodging.getMaxGuest();
        this.bedroomCount = lodging.getBedroomCount();
        this.bedCount = lodging.getBedCount();
        this.bathroomCount = lodging.getBathroomCount();
        this.description = lodging.getDescription();
        this.price = lodging.getPrice();
        this.propertyType = lodging.getPropertyType().getName();
        this.hostName = lodging.getHostName();
        this.hostImageUrl = lodging.getHostImage();
        initImageUrl(lodging);
    }

    private void initImageUrl(Lodging lodging) {
        List<String> subImageUrls = new ArrayList<>();
        for (Images image : lodging.getImages()) {
            if (image.isMainImage() == true) {
                this.mainImageUrl = image.getImageUrl();
            } else {
                subImageUrls.add(image.getImageUrl());
            }
        }
        this.subImageUrls = subImageUrls;
    }

}
