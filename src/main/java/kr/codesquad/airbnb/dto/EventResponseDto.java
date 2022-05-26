package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Event;
import lombok.Getter;

@Getter
public class EventResponseDto {

    private Long id;
    private String title;
    private String description;
    private String buttonName;
    private String imageUrl;

    public EventResponseDto(Event event) {
        this.id = event.getId();
        this.title = event.getTitle();
        this.description = event.getDescription();
        this.buttonName = event.getButtonName();
        this.imageUrl = event.getImageUrl();
    }

    @Override
    public String toString() {
        return "EventResponseDto{" +
            "id=" + id +
            ", title='" + title + '\'' +
            ", description='" + description + '\'' +
            ", buttonName='" + buttonName + '\'' +
            ", imageUrl='" + imageUrl + '\'' +
            '}';
    }
}
