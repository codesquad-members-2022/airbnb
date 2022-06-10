package team18.airbnb.search.dto;

import java.time.LocalDate;

import lombok.Getter;
import team18.airbnb.domain.Accommodation;

@Getter
public class SearchResultDto {

    private String mainImageUrl;
    private float startPoint;
    private int reviewCount;
    private String accommodationName;
    private int amountOfDay;
    private double totalAmount;

    public SearchResultDto(LocalDate checkinDate, LocalDate checkoutDate, Accommodation accommodation) {
        this.mainImageUrl = accommodation.getMainImageUrl();
        this.startPoint = accommodation.getStartPoint();
        this.reviewCount = accommodation.getReviewCount();
        this.accommodationName = accommodation.getName();
        this.amountOfDay = accommodation.getAccommodationFee().getAmountOfDay();
        this.totalAmount =
                accommodation.getAccommodationFee().calculateTotalAmountOfDay(checkinDate, checkoutDate);
    }
}
