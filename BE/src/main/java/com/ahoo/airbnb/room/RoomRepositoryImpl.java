package com.ahoo.airbnb.room;

import static com.ahoo.airbnb.entity.QRoom.room;
import static com.ahoo.airbnb.entity.QRoomChargePolicy.roomChargePolicy;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.querydsl.core.types.dsl.BooleanExpression;
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
                containsAddress(address),
                goeHeadcount(headcount))
            .fetch();
    }

    private BooleanExpression containsAddress(String address) {
        if (address.isEmpty() || address.isBlank()) {
            return null;
        }
        return room.address.country
            .concat(room.address.city)
            .concat(room.address.state)
            .concat(room.address.street)
            .concat(room.address.detailAddress).contains(address);
    }

    private BooleanExpression goeHeadcount(Integer headcount) {
        if (headcount == null) {
            return null;
        }
        return room.maxCapacity.goe(headcount);
    }
}
