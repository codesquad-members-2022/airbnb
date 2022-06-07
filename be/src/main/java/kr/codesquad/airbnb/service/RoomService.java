package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.*;
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

    public RoomSearchDto findPossibleBookingRooms(RoomSearchRequest roomSearchRequest) {
        List<Room> possibleBookingRooms = roomRepository.findPossibleBookingRooms(roomSearchRequest);
        RoomSearchDto roomSearchDto = new RoomSearchDto();

        for (Room possibleBookingRoom : possibleBookingRooms) {
            roomSearchDto.addRoom(new RoomDto(possibleBookingRoom, roomSearchRequest));
        }

        return roomSearchDto;
    }
}
