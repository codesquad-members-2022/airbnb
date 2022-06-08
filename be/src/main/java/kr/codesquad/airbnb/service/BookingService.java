package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.Member;
import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.BookingDto;
import kr.codesquad.airbnb.dto.BookingRoomRequest;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final RoomService roomService;
    private final MemberService memberService;

    public BookingDto bookingRoom(BookingRoomRequest bookingRoomRequest) {
        Room room = roomService.findRoom(bookingRoomRequest.getRoomId());
        validateRoomIsNotAlreadyBooking(room, bookingRoomRequest);
        Member member = memberService.findMember(1L);

        Booking booking = new Booking(member, room, bookingRoomRequest);
        Booking savedBooking = bookingRepository.save(booking);

        return new BookingDto(savedBooking);
    }

    private void validateRoomIsNotAlreadyBooking(Room room, BookingRoomRequest bookingRoomRequest) {
        List<Booking> bookingList = bookingRepository.findAlreadyBookingByRoomAndDate(room, bookingRoomRequest.getCheckIn(), bookingRoomRequest.getCheckOut());
        if (!bookingList.isEmpty()) {
            throw new CustomException(ErrorCode.ALREADY_BOOKING_ROOM);
        }
    }
}
