package com.ahoo.airbnb.room;

import static com.ahoo.airbnb.entity.QRoom.room;
import static com.ahoo.airbnb.entity.QRoomChargePolicy.roomChargePolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RoomRepositoryImpl implements RoomCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<ChargePolicyType> findActiveChargePolicyTypeById(Long id) {
        return queryFactory
            .select(roomChargePolicy.chargePolicy.chargePolicyType)
            .from(room)
            .innerJoin(room.roomChargePolicies, roomChargePolicy)
            .where(
                room.id.eq(id),
                roomChargePolicy.chargePolicy.isActive.isTrue())
            .fetch();
    }

    @Override
    public List<Room> findByAddressContainingAndHeadcountGreaterOrEqual(String address, Integer headcount) {
        return queryFactory
            .selectFrom(room)
            .where(
                JPAExpressions
                    .select(room.address.country
                        .concat(room.address.city)
                        .concat(room.address.state)
                        .concat(room.address.street)
                        .concat(room.address.detailAddress))
                    .from(room).contains(address),
                room.maxCapacity.goe(headcount))
            .fetch();
    }
}
