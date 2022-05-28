package kr.codesquad.airbnb.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import kr.codesquad.airbnb.domain.Images;
import kr.codesquad.airbnb.domain.Lodging;
import lombok.Getter;

@Getter
public class LodgingResponseDto {

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
    private List<String> imageUrls;

    public LodgingResponseDto(Lodging lodging, List<Images> images) {
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
        this.imageUrls = initImages(lodging.getMainImageUrl(),images);
    }

    private List<String> initImages(String mainImageUrl, List<Images> images) {
        List<String> imageUrls = new ArrayList();
        imageUrls.add(mainImageUrl);
        imageUrls.addAll(images.stream().map(Images::getImageUrl)
            .collect(Collectors.toList()));
        return imageUrls;
    }
}
