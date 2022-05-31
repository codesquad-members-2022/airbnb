package com.codesquad.airbnb.room;

import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.district.District;
import com.codesquad.airbnb.district.District.DistrictType;
import com.codesquad.airbnb.domain.GuestGroup;
import com.codesquad.airbnb.domain.Location;
import com.codesquad.airbnb.domain.ReviewTotal;
import com.codesquad.airbnb.domain.RoomCharge;
import com.codesquad.airbnb.domain.RoomGroup;
import com.codesquad.airbnb.domain.RoomOption;
import com.codesquad.airbnb.domain.StayPeriod;
import com.codesquad.airbnb.domain.StayTime;
import com.codesquad.airbnb.domain.search.PriceRange;
import com.codesquad.airbnb.domain.search.Radius;
import com.codesquad.airbnb.member.Member;
import com.codesquad.airbnb.member.Member.MemberRole;
import com.codesquad.airbnb.reservation.Reservation;
import com.codesquad.airbnb.room.dto.RoomSearCondition;
import com.codesquad.airbnb.room.dto.RoomSearchResponse;
import com.codesquad.airbnb.room.entity.Room;
import com.codesquad.airbnb.room.entity.Room.RoomType;
import com.codesquad.airbnb.room.entity.RoomDetail;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestEntityManager;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

@ActiveProfiles("test")
@SpringBootTest
@Transactional
@AutoConfigureTestEntityManager
@AutoConfigureTestDatabase(replace = Replace.NONE)
@DisplayName("RoomRepository 통합 테스트")
class RoomRepositoryTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    RoomService roomService;

    // test fixture
    District district;
    Member host;
    Member guest;
    Room room;
    RoomDetail roomDetail;
    Reservation reservation;

    @BeforeEach
    public void setUp() {
        district = new District(
            "서울특별시",
            "서울특별시",
            "https://bit.ly/3PKgIBo",
            DistrictType.PRIMARY,
            new Location(126.9896, 37.5499),
            new ReviewTotal(4.5, 50)
        );
        host = new Member(
            "Miller",
            "https://avatars.githubusercontent.com/u/50660684?v=4",
            false,
            MemberRole.USER
        );
        guest = new Member(
            "BB-choi",
            "https://avatars.githubusercontent.com/u/78826879?v=4",
            false,
            MemberRole.USER
        );
        room = new Room(
            district,
            host,
            "Spacious and Comfortable cozy house #4",
            "강남역 5번 출구에서 도보로 이동가능합니다.",
            "https://bit.ly/39ZouHy",
            RoomType.WHOLE_RESIDENCE,
            new Location(127.0286, 37.4953),
            new RoomCharge(71466.0, 25996.0),
            new ReviewTotal(4.8, 127)
        );
        roomDetail = new RoomDetail(
            room,
            new GuestGroup(2, 1, 0),
            new RoomGroup(2, 1, 1, 1),
            new RoomOption(true, true, true, true),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
        );
        reservation = new Reservation(
            room,
            guest,
            67007.0,
            new GuestGroup(2, 1, 0),
            new StayPeriod(LocalDate.of(2022, 5, 30), LocalDate.of(2022, 5, 31)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0))
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
            new StayPeriod(null, null)
        ));

        // then
        then(rooms.size()).isEqualTo(1);
    }


    @Test
    @Rollback(false)
    @DisplayName("요청한 날짜의 숙소에 이미 예약이 되어있는 경우 검색에서 제외한다")
    public void roomSearchWitPeriodTest() {
        // when
        List<RoomSearchResponse> rooms = roomService.searchRooms(new RoomSearCondition(
            new Location(127.0286, 37.4953),
            new Radius(1.0, 1.0),
            new GuestGroup(2, 1, 0),
            new PriceRange(7000, 80000),
            new StayPeriod(LocalDate.of(2022, 5, 30), LocalDate.of(2022, 5, 31))
        ));

        // then
        then(rooms.size()).isEqualTo(0);
    }

}
