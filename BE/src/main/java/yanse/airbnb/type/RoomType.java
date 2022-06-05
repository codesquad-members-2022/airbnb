package yanse.airbnb.type;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum RoomType {
	RESIDENCE("레지던스"),
	APARTMENT("아파트"),
	HOUSE("단독주택"),
	PENSION("펜션");

	private final String value;

}
