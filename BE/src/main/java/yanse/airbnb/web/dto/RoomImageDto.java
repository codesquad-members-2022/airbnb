package yanse.airbnb.web.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yanse.airbnb.domain.image.RoomImage;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RoomImageDto {

	private Long id;

	private String url;

	public RoomImageDto(RoomImage roomImage) {
		id = roomImage.getId();
		url = roomImage.getUrl();
	}

}
