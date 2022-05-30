package com.codesquad.airbnb.tag;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Integer id;

    private String name;
    private String imagePath;
    private Boolean display;
    private Integer sequence;

    @OneToMany(mappedBy = "tag")
    private List<TagRoom> roomRefs;

    public Tag(String name, String imagePath, Boolean display, Integer sequence) {
        this.name = name;
        this.imagePath = imagePath;
        this.display = display;
        this.sequence = sequence;
    }
}
