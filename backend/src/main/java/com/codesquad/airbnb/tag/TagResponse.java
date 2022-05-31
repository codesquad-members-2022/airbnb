package com.codesquad.airbnb.tag;

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
