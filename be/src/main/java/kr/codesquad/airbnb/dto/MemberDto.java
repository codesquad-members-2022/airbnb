package kr.codesquad.airbnb.dto;

import kr.codesquad.airbnb.domain.Booking;
import kr.codesquad.airbnb.domain.Member;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class MemberDto {

    private final Long id;
    private final String name;
    private final List<Booking> bookings;
    private final LocalDateTime createdAt;

    public MemberDto(Member member) {
        id = member.getId();
        name = member.getName();
        bookings = member.getBookings();
        createdAt = member.getCreatedAt();
    }
}
