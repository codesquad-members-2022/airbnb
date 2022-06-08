package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.*;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

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

    public Room findRoom(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_ROOM));
    }
}
