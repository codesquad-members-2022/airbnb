package louie.dong.airbnb.accommodation;

import java.util.List;
import louie.dong.airbnb.accommodation.dto.AccommodationDetailPriceResponse;
import louie.dong.airbnb.accommodation.dto.AccommodationDetailResponse;
import louie.dong.airbnb.accommodation.dto.AccommodationPriceResponse;
import org.springframework.stereotype.Service;

@Service
public class MockAccommodationService {

	public AccommodationPriceResponse findPrices(String country) {
		return new AccommodationPriceResponse(165556, List.of(12345, 56780, 12455, 12350));
	}

	public AccommodationDetailResponse findById(Long id) {
		return new AccommodationDetailResponse(1L,
			"숙소 이름",
			"https://~~~",
			4.80,
			127,
			"서초구, 서울, 한국",
			"Jong",
			"http://~~~~~~~~~",
			3,
			"원룸",
			1,
			1,
			"강남역 5번 출구에서 도보로 이동 가능합니다. 지하철, 버스 노선이 다양하고 맛집, 마트 등 주변 시설이 풍부합니다.",
			82953,
			false
		);
	}

	public AccommodationDetailPriceResponse findDetailPrice(Long id, String checkIn, String checkOut, int guestCount) {
		return new AccommodationDetailPriceResponse(71466, 18, 1322396, 4, 55948, 25996, 8188, 819,
			1488195);
	}
}
