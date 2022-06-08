package team18.airbnb.domain;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private float startPoint;
    private int reviewCount;
    private String description;
    private String name;
    private String mainImageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;

    @Embedded
    private AccommodationAddress accommodationAddress;

    @Embedded
    private AccommodationInfo accommodationInfo;

    @Embedded
    private AccommodationFee accommodationFee;

    public Accommodation(float startPoint, int reviewCount, String description, String name, String mainImgUrl,
                         AccommodationAddress accommodationAddress,
                         AccommodationInfo accommodationInfo,
                         AccommodationFee accommodationFee,
                         Region region) {

        this.startPoint = startPoint;
        this.reviewCount = reviewCount;
        this.description = description;
        this.name = name;
        this.mainImageUrl = mainImgUrl;
        this.accommodationAddress = accommodationAddress;
        this.accommodationInfo = accommodationInfo;
        this.accommodationFee = accommodationFee;
        this.region = region;
    }
}
