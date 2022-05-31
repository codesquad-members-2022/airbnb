package yanse.airbnb.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yanse.airbnb.domain.room.RoomRepository;
import yanse.airbnb.web.dto.ResponseSearchAddressDto;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class SearchService {

	private final RoomRepository roomRepository;
	public List<ResponseSearchAddressDto> findAddress(String address) {
		return roomRepository.findByAddress(address);
	}
}
