package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.dto.RoomPriceStatistic;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomPriceStatisticDto findStatisticOfRoomPrice(RoomPriceStatisticRequest roomPriceStatisticRequest) {
        RoomPriceStatistic roomPriceStatistic = roomRepository.findStatisticOfRoomPrice(roomPriceStatisticRequest.getCheckIn(), roomPriceStatisticRequest.getCheckOut());

        return RoomPriceStatisticDto.of(roomPriceStatistic);
    }
}
