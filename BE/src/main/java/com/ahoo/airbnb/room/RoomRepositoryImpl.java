package com.ahoo.airbnb.room;

import static com.ahoo.airbnb.entity.QRoom.room;
import static com.ahoo.airbnb.entity.QRoomChargePolicy.roomChargePolicy;

import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
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
}
