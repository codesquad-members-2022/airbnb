package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.FilteredRoomRequest;
import kr.codesquad.airbnb.dto.RoomPriceStatistic;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomPriceStatisticDto findStatisticOfRoomPrice(FilteredRoomRequest filteredRoomRequest) {
        RoomPriceStatistic roomPriceStatistic = roomRepository.findStatisticOfRoomPrice(filteredRoomRequest.getCheckIn(), filteredRoomRequest.getCheckOut());

        return new RoomPriceStatisticDto().of(roomPriceStatistic);
    }
}
