package com.codesquad.airbnb.district;

import com.codesquad.airbnb.room.entity.embeddable.Lookup;
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
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class District {

    // 행정구역 상 국가/1계층/2계층/3계층 구분
    enum DistrictType {COUNTRY, PRIMARY, SECONDARY, TERTIARY}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "district_id")
    private Integer id;

    private String name;
    private String imagePath;
    private String address;

    @Enumerated(value = EnumType.STRING)
    private DistrictType type;

    @Embedded
    private Lookup lookup;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private District parent;

    @OneToMany(mappedBy = "parent")
    private List<District> children;

}
