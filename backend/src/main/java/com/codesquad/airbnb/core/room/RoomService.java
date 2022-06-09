package com.codesquad.airbnb.core.room;

import com.codesquad.airbnb.core.charge.ChargeBill;
import com.codesquad.airbnb.core.charge.ChargeManager;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.domain.PriceRange;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.core.room.dto.response.PriceRangeResponse;
import com.codesquad.airbnb.core.room.dto.response.RoomDetailResponse;
import com.codesquad.airbnb.core.room.dto.response.RoomSearchResponse;
import com.codesquad.airbnb.core.room.entity.Room;
import com.codesquad.airbnb.core.room.repository.RoomRepository;
import com.codesquad.airbnb.exception.ErrorCode;
import com.codesquad.airbnb.exception.unchecked.NotFoundException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;
    private final ChargeManager chargeManager;

    @Transactional(readOnly = true)
    public List<RoomSearchResponse> searchRooms(RoomSearCondition condition) {
        List<Room> rooms = roomRepository.searchWithCondition(condition);
        return rooms.stream()
            .map(RoomSearchResponse::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RoomDetailResponse findRoom(Integer id) {
        Room room = roomRepository.findByIdWithDetailAndDistrictAndImages(id)
            .orElseThrow(() -> new NotFoundException(ErrorCode.ROOM_NOT_FOUND));

        return RoomDetailResponse.from(room);
    }

    @Transactional(readOnly = true)
    public ChargeBill showCharge(Integer id, StayDate stayDate, GuestGroup guestGroup) {
        Room room = roomRepository.findById(id)
            .orElseThrow(() -> new NotFoundException(ErrorCode.ROOM_NOT_FOUND));

        return chargeManager.createBill(room, stayDate, guestGroup);
    }

    @Transactional(readOnly = true)
    public PriceRangeResponse showPriceRange(RoomSearCondition condition, Integer interval) {

        List<Integer> prices = roomRepository.searchPriceWithCondition(condition);

        PriceRange range = new PriceRange(
            prices.size() > 0 ? Collections.min(prices) : 0,
            prices.size() > 0 ? Collections.max(prices) : 0
        );
        Map<Integer, Long> buckets = prices.stream()
            .collect(Collectors.groupingBy(
                price -> floorWithInterval(price, interval), Collectors.counting()));

        return PriceRangeResponse.of(range, buckets);
    }

    private int floorWithInterval(Integer price, Integer interval) {
        return (int) Math.floor((double) price / interval) * interval;
    }

}
