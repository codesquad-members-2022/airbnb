package com.codesquad.airbnb.core.room;

import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.config.TestConfig;
import com.codesquad.airbnb.core.charge.ChargeManager;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.ReviewStat;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.common.embeddable.StayTime;
import com.codesquad.airbnb.core.district.District;
import com.codesquad.airbnb.core.district.District.DistrictType;
import com.codesquad.airbnb.core.member.Member;
import com.codesquad.airbnb.core.member.Member.MemberRole;
import com.codesquad.airbnb.core.reservation.Reservation;
import com.codesquad.airbnb.core.reservation.Reservation.ReservationState;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition.PriceRange;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition.Radius;
import com.codesquad.airbnb.core.room.dto.response.RoomSearchResponse;
import com.codesquad.airbnb.core.room.entity.Room;
import com.codesquad.airbnb.core.room.entity.Room.RoomType;
import com.codesquad.airbnb.core.room.entity.RoomDetail;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomOption;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomPrice;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Import({TestConfig.class, RoomService.class, ChargeManager.class})
@DisplayName("RoomService 통합 테스트")
class RoomServiceTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    RoomService roomService;

    @BeforeEach
    public void setUp() {
        District district = new District(
            "서울특별시",
            "서울특별시",
            "https://bit.ly/3PKgIBo",
            DistrictType.PRIMARY,
            new Location(126.9896, 37.5499),
            new ReviewStat(4.5, 50)
        );

        Member host = new Member(
            "Miller",
            "rxdcxdrnine",
            "https://avatars.githubusercontent.com/u/50660684?v=4",
            false,
            MemberRole.USER
        );

        Member guest = new Member(
            "BB-choi",
            "BB-choi",
            "https://avatars.githubusercontent.com/u/78826879?v=4",
            false,
            MemberRole.USER
        );

        Room room = new Room(
            district,
            host,
            "Spacious and Comfortable cozy house #4",
            "강남역 5번 출구에서 도보로 이동가능합니다.",
            "https://bit.ly/39ZouHy",
            RoomType.WHOLE_RESIDENCE,
            new Location(127.0286, 37.4953),
            new RoomPrice(71466, 25996),
            new ReviewStat(4.8, 127)
        );

        RoomDetail roomDetail = new RoomDetail(
            room,
            new GuestGroup(2, 1, 0),
            new RoomGroup(2, 1, 1, 1),
            new RoomOption(true, true, true, true),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
        );

        // 5월 30일 ~ 6월 2일 예약
        Reservation reservation = new Reservation(
            guest,
            room,
            67007,
            new GuestGroup(2, 1, 0),
            new StayDate(LocalDate.of(2022, 5, 30), LocalDate.of(2022, 6, 2)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0)),
            ReservationState.BOOKED
        );

        em.persist(district);
        em.persist(host);
        em.persist(guest);
        em.persist(room);
        em.persist(roomDetail);
        em.persist(reservation);

        em.flush();
        em.clear();
    }

    @Test
    @DisplayName("날짜 선택을 하지 않고 조건을 만족하는 숙소의 목록을 검색한다")
    public void roomSearchWithoutPeriodTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(60000, 80000),
            new StayDate(null, null)
        ));

        // then
        then(rooms.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("요청한 날짜의 체크아웃 날짜가 예약 불가능한 경우 검색에서 제외한다")
    // 5월 29일 ~ 5월 31일 검색
    public void roomSearchWitPeriodOverlappedLeftTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 5, 29), LocalDate.of(2022, 5, 31))
        ));

        // then
        then(rooms.size()).isEqualTo(0);
    }

    @Test
    @DisplayName("요청한 날짜의 체크아웃 날짜와 예약의 체크인 날짜가 겹치는 경우 검색에 포함한다")
    // 5월 29일 ~ 5월 30일 검색
    public void roomSearchWitPeriodNotOverlappedLeftTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 5, 29), LocalDate.of(2022, 5, 30))
        ));

        // then
        then(rooms.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("요청한 날짜의 숙소에 체크인 날짜가 예약 불가능한 경우 검색에서 제외한다")
    // 6월 1일 ~ 6월 3일 검색
    public void roomSearchWitPeriodOverlappedRightTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 6, 1), LocalDate.of(2022, 6, 3))
        ));

        // then
        then(rooms.size()).isEqualTo(0);
    }

    @Test
    @DisplayName("요청한 날짜의 체크인 날짜와 예약의 체크아웃 날짜가 겹치는 경우 검색에 포함한다")
    // 6월 2일 ~ 6월 3일 검색
    public void roomSearchWitPeriodNotOverlappedRightTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 6, 2), LocalDate.of(2022, 6, 3))
        ));

        // then
        then(rooms.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("요청한 날짜의 숙소에 일정 중간에 예약 불가능한 경우 검색에서 제외한다")
    // 5월 31일 ~ 6월 1일 검색
    public void roomSearchWitPeriodOverlappedInTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 5, 31), LocalDate.of(2022, 6, 1))
        ));

        // then
        then(rooms.size()).isEqualTo(0);
    }

    @Test
    @Rollback(false)
    @DisplayName("요청한 날짜의 숙소에 일정 전부 예약 불가능한 경우 검색에서 제외한다")
    // 5월 29일 ~ 6월 3일 검색
    public void roomSearchWitPeriodOverlappedOutTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayDate(LocalDate.of(2022, 5, 29), LocalDate.of(2022, 6, 3))
        ));

        // then
        then(rooms.size()).isEqualTo(0);
    }

}
