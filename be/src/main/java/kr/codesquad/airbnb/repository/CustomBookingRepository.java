package kr.codesquad.airbnb.repository;

import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.Room;

import java.time.LocalDate;
import java.util.List;

public interface CustomBookingRepository {

    List<Booking> findAlreadyBookingByRoomAndDate(Room room, LocalDate checkIn, LocalDate checkOut);
}
