package com.ahoo.airbnb.room;

import lombok.Getter;

import java.util.List;

@Getter
public class ImagesResponse {

    private List<ImageResponse> images;

    public ImagesResponse(List<ImageResponse> images) {
        this.images = images;
    }
}
