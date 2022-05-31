package com.codesquad.airbnb.reservation;

import static com.codesquad.airbnb.district.QDistrict.district;
import static com.codesquad.airbnb.member.QMember.member;
import static com.codesquad.airbnb.reservation.QReservation.reservation;
import static com.codesquad.airbnb.room.entity.QRoom.room;
import static com.codesquad.airbnb.room.entity.QRoomDetail.roomDetail;
import static com.codesquad.airbnb.room.entity.QRoomImage.roomImage;

import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ReservationRepository {

    private final JPAQueryFactory queryFactory;

    public List<Reservation> findByMemberId(Integer memberId) {
        return queryFactory.selectFrom(reservation)
            .join(reservation.room, room)
            .fetchJoin()
            .join(room.district, district)
            .fetchJoin()
            .join(reservation.guest, member)
            .fetchJoin()
            .where(member.id.eq(memberId))
            .distinct()
            .fetch();
    }

    public Reservation findById(Integer reservationId) {
        return queryFactory.selectFrom(reservation)
            .join(reservation.room, room)
            .fetchJoin()
            .join(room.detail, roomDetail)
            .fetchJoin()
            .join(room.district, district)
            .fetchJoin()
            .join(room.host, member)
            .fetchJoin()
            .join(room.images, roomImage)
            .fetchJoin()
            .fetchOne();
    }

}
