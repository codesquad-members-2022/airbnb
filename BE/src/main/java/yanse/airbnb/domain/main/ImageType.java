package yanse.airbnb.domain.main;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ImageType {

	MAIN("메인"),
	AROUND("가까운 여행지"),
	RECOMMENDATION("추천 여행지");

	private final String value;
}
