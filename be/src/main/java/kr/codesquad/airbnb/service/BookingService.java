package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.Member;
import kr.codesquad.airbnb.domain.Room;
import kr.codesquad.airbnb.dto.BookingDto;
import kr.codesquad.airbnb.dto.BookingRoomRequest;
import kr.codesquad.airbnb.exception.CustomException;
import kr.codesquad.airbnb.exception.ErrorCode;
import kr.codesquad.airbnb.repository.BookingRepository;
import kr.codesquad.airbnb.repository.MemberRepository;
import kr.codesquad.airbnb.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final RoomRepository roomRepository;
    private final MemberRepository memberRepository;

    public BookingDto bookingRoom(BookingRoomRequest bookingRoomRequest) {
        Room room = roomRepository.findById(bookingRoomRequest.getRoomId())
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_ROOM));
        validateRoomIsNotAlreadyBooking(room, bookingRoomRequest);
        Member member = memberRepository.findById(1L)
                .orElseThrow(() -> new CustomException(ErrorCode.NOT_EXIST_MEMBER));

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
