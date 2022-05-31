package com.codesquad.airbnb.district;

import com.codesquad.airbnb.domain.Location;
import com.codesquad.airbnb.domain.ReviewTotal;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.locationtech.jts.geom.Point;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"name", "imagePath", "address", "type"})
public class District {

    // 행정구역 상 국가/1계층/2계층/3계층 구분
    public enum DistrictType {COUNTRY, PRIMARY, SECONDARY, TERTIARY}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "district_id")
    private Integer id;

    private String name;
    private String address;
    private String imagePath;

    @Enumerated(value = EnumType.STRING)
    private DistrictType type;

    private Point point;

    @Embedded
    private ReviewTotal review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private District parent;

    @OneToMany(mappedBy = "parent")
    private List<District> children;


    public District(String name, String address, String imagePath, DistrictType type) {
        this(name, imagePath, address, type, null, null);
    }

    public District(String name, String address, String imagePath, DistrictType type,
        Location location, ReviewTotal review) {
        this.name = name;
        this.imagePath = imagePath;
        this.address = address;
        this.type = type;
        this.point = location != null ? location.toPoint() : null;
        this.review = review;
    }

    public Location getLocation() {
        return new Location(point.getX(), point.getY());
    }
}
