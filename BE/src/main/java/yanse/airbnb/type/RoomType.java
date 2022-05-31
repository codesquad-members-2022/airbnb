package yanse.airbnb.type;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum RoomType {
	residence("레지던스"),
	apartment("아파트"),
	house("단독주택"),
	pension("펜션");

	private final String value;

}
