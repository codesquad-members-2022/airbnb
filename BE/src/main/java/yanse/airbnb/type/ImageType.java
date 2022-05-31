package yanse.airbnb.type;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ImageType {

	hero("메인"),
	around("가까운 여행지"),
	recommendation("추천 여행지");

	private final String value;

}
