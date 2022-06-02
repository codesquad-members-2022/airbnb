package com.codesquad.airbnb.tag.dto;

import com.codesquad.airbnb.tag.entity.Tag;
import lombok.Getter;

@Getter
public class TagResponse {

    private final int tagId;
    private final String name;
    private final String imagePath;

    public TagResponse(Tag tag) {
        this.tagId = tag.getId();
        this.name = tag.getName();
        this.imagePath = tag.getImagePath();
    }
}
