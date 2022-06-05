package yanse.airbnb.type;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ImageType {

	HERO("메인"),
	AROUND("가까운 여행지"),
	RECOMMENDATION("추천 여행지");

	private final String value;

}
