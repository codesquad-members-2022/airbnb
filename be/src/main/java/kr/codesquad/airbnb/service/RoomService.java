package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.repository.RoomQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomQueryRepository roomRepository;

    public RoomPriceStatisticDto findStatisticOfRoomPrice(RoomPriceStatisticRequest roomPriceStatisticRequest) {
        List<Room> possibleBookingRooms = roomRepository.findPossibleBookingRooms(roomPriceStatisticRequest.getCheckIn(), roomPriceStatisticRequest.getCheckOut());

        return new RoomPriceStatisticDto().of(possibleBookingRooms);
    }
}
