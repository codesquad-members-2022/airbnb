package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.domain.RoomPriceStatistic;
import kr.codesquad.airbnb.dto.RoomDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticDto;
import kr.codesquad.airbnb.dto.RoomPriceStatisticRequest;
import kr.codesquad.airbnb.dto.RoomSearchRequest;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomPriceStatisticDto findStatisticOfRoomPrice(RoomPriceStatisticRequest roomPriceStatisticRequest) {
        List<Room> possibleBookingRooms = roomRepository.findPossibleBookingRooms(roomPriceStatisticRequest.getCheckIn(), roomPriceStatisticRequest.getCheckOut());
        RoomPriceStatistic roomPriceStatistic = new RoomPriceStatistic(possibleBookingRooms);

        return new RoomPriceStatisticDto(roomPriceStatistic);
    }

    public List<RoomDto> findPossibleBookingRooms(RoomSearchRequest roomSearchRequest) {
        List<Room> possibleBookingRooms = roomRepository.findPossibleBookingRooms(roomSearchRequest);

        return possibleBookingRooms.stream()
                .map(possibleBookingRoom -> new RoomDto(possibleBookingRoom))
                .collect(Collectors.toList());
    }

    public RoomDto findRoom(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_ROOM));

        return new RoomDto(room);
    }
}
