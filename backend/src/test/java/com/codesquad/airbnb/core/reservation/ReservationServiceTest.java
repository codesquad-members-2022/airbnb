package com.codesquad.airbnb.core.reservation;

import static org.assertj.core.api.Assertions.catchThrowable;
import static org.assertj.core.api.BDDAssertions.then;

import com.codesquad.airbnb.core.charge.ChargeManager;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.ReviewStat;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.common.embeddable.StayTime;
import com.codesquad.airbnb.config.TestConfig;
import com.codesquad.airbnb.core.district.District;
import com.codesquad.airbnb.core.district.District.DistrictType;
import com.codesquad.airbnb.core.reservation.Reservation;
import com.codesquad.airbnb.core.reservation.ReservationService;
import com.codesquad.airbnb.exception.unchecked.NotAvailableException;
import com.codesquad.airbnb.core.member.Member;
import com.codesquad.airbnb.core.member.Member.MemberRole;
import com.codesquad.airbnb.core.reservation.Reservation.ReservationState;
import com.codesquad.airbnb.core.room.entity.Room;
import com.codesquad.airbnb.core.room.entity.Room.RoomType;
import com.codesquad.airbnb.core.room.entity.RoomDetail;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomGroup;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomOption;
import com.codesquad.airbnb.core.room.entity.embeddable.RoomPrice;
import java.time.LocalDate;
import java.time.LocalTime;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Import({TestConfig.class, ReservationService.class, ChargeManager.class})
@DisplayName("ReservationService 통합 테스트")
class ReservationServiceTest {

    @Autowired
    TestEntityManager em;

    @Autowired
    ReservationService reservationService;

    // fixture
    Room room;
    Member guest;

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

        Member host = new Member("Miller",
            "rxdcxdrnine",
            "https://avatars.githubusercontent.com/u/50660684?v=4",
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

        guest = new Member(
            "BB-choi",
            "BB-choi",
            "https://avatars.githubusercontent.com/u/78826879?v=4",
            false,
            MemberRole.USER
        );

        em.persist(district);
        em.persist(host);
        em.persist(room);
        em.persist(roomDetail);
        em.persist(guest);

        em.flush();
        em.clear();
    }

    @Test
    @DisplayName("예약을 진행하고 저장소에서 저장된 예약을 확인한다")
    public void makeReservationTest() {
        // given
        Reservation savedReservation = reservationService.makeReservation(
            guest.getId(),
            room.getId(),
            new StayDate(LocalDate.of(2022, 5, 31),
                LocalDate.of(2022, 6, 1)),
            new GuestGroup(2, 1, 0)
        );

        em.flush();
        em.clear();

        // when
        Reservation findReservation = em.find(Reservation.class, savedReservation.getId());

        // then
        then(findReservation.getRoom().getId()).isEqualTo(room.getId());
        then(findReservation.getGuest().getId()).isEqualTo(guest.getId());

        then(findReservation.getGuestGroup().getNumberAdult()).isEqualTo(2);
        then(findReservation.getGuestGroup().getNumberChild()).isEqualTo(1);
        then(findReservation.getGuestGroup().getNumberInfant()).isEqualTo(0);

        then(findReservation.getStayDate().getCheckinDate()).isEqualTo(LocalDate.of(2022, 5, 31));
        then(findReservation.getStayDate().getCheckoutDate()).isEqualTo(LocalDate.of(2022, 6, 1));
        then(findReservation.getStayTime().getCheckinTime()).isEqualTo(LocalTime.of(17, 0, 0));
        then(findReservation.getStayTime().getCheckoutTime()).isEqualTo(LocalTime.of(12, 0, 0));

        then(findReservation.getState()).isEqualTo(ReservationState.BOOKED);
    }

    @Test
    @DisplayName("해당 날짜에 이미 예약이 되어있어 예약에 실패한다")
    public void makeReservationFailWithDateTest() {
        // given
        // 5월 31일 ~ 6월 1일 예약 저장
        Reservation reservation = new Reservation(
            guest,
            room,
            67007,
            new GuestGroup(2, 1, 0),
            new StayDate(LocalDate.of(2022, 5, 31), LocalDate.of(2022, 6, 1)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0)),
            ReservationState.BOOKED
        );

        em.persist(reservation);
        em.flush();
        em.clear();

        // when
        // 5월 31일 ~ 6월 1일 예약 시도
        Throwable throwable = catchThrowable(() -> reservationService.makeReservation(
            guest.getId(),
            room.getId(),
            new StayDate(LocalDate.of(2022, 5, 31),
                LocalDate.of(2022, 6, 1)),
            new GuestGroup(2, 1, 0)
        ));

        // then
        then(throwable).isInstanceOf(NotAvailableException.class)
            .hasMessage("해당 날짜에 예약을 할 수 없습니다.");
    }

    @Test
    @DisplayName("예약을 취소하고 저장소에서 취소된 예약 정보를 확인한다")
    public void cancelReservationTest() {
        // given
        Reservation reservation = new Reservation(
            guest,
            room,
            67007,
            new GuestGroup(2, 1, 0),
            new StayDate(LocalDate.of(2022, 5, 31), LocalDate.of(2022, 6, 1)),
            new StayTime(LocalTime.of(17, 0, 0), LocalTime.of(12, 0, 0)),
            ReservationState.BOOKED
        );

        em.persist(reservation);
        em.flush();
        em.clear();

        Reservation canceledReservation = reservationService.cancelReservation(reservation.getId());

        em.flush();
        em.clear();

        // when
        Reservation findReservation = em.find(Reservation.class, canceledReservation.getId());

        // then
        then(findReservation.getState()).isEqualTo(ReservationState.CANCELED);
    }

}
