package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.RoomSearchRequest;

import java.time.LocalDate;
import java.util.List;

public interface CustomRoomRepository {

    List<Room> findPossibleBookingRooms(LocalDate checkIn, LocalDate checkOut);

    List<Room> findPossibleBookingRooms(RoomSearchRequest roomSearchRequest);
}
