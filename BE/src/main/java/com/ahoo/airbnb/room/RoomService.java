package com.ahoo.airbnb.room;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.Wish;
import com.ahoo.airbnb.member.MemberRepository;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.ahoo.airbnb.room.dtos.RoomRequest;
import com.ahoo.airbnb.room.dtos.RoomResponse;
import com.ahoo.airbnb.utils.DateUtils;
import com.ahoo.airbnb.wish.WishRepository;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomService {

    private static final int DEFAULT_MAX_CHARGE = 1_000_000;
    private static final int DEFAULT_MIN_CHARGE = 0;
    private static final int DEFAULT_HEADCOUNT = 0;

    private final RoomRepository roomRepository;
    private final WishRepository wishRepository;
    private final MemberRepository memberRepository;

    public List<RoomResponse> findByCondition(RoomRequest roomRequest) {
        List<Room> findRooms = roomRepository.findByAddressContainingAndHeadcountGreaterOrEqual(
            roomRequest.getLocation(),
            roomRequest.getHeadCount());

        Member member = memberRepository.findById(1L).get();

        Set<Room> wishRooms = wishRepository.findAllByMember(member).stream()
            .map(Wish::getRoom)
            .collect(Collectors.toSet());

        return getRoomResponses(roomRequest, findRooms, wishRooms);
    }

    private List<RoomResponse> getRoomResponses(RoomRequest roomRequest, List<Room> findRooms, Set<Room> wishRooms) {

        LocalDateTime checkIn = DateUtils.stringToLocalDateTime(roomRequest.getCheckInDate());
        LocalDateTime checkOut = DateUtils.stringToLocalDateTime(roomRequest.getCheckOutDate());
        Integer headcount = roomRequest.getHeadCount() == null ? DEFAULT_HEADCOUNT : roomRequest.getHeadCount();
        Integer minCharge = roomRequest.getMinCharge() == null ? DEFAULT_MIN_CHARGE : roomRequest.getMinCharge();
        Integer maxCharge = roomRequest.getMaxCharge() == null ? DEFAULT_MAX_CHARGE + 1 : roomRequest.getMaxCharge();

        List<RoomResponse> roomResponses = new ArrayList<>();

        for (Room findRoom : findRooms) {
            boolean isWish = wishRooms.contains(findRoom);

            List<ChargePolicyType> activeChargePolicyTypeById = roomRepository.findActiveChargePolicyTypeById(findRoom.getId());

            int totalCharge = calculateTotalCharge(activeChargePolicyTypeById, checkIn, checkOut, headcount, findRoom);
            int chargePerDay = calculateChargePerDay(checkIn, checkOut, totalCharge);

            if (isValidChargeRange(minCharge, maxCharge, totalCharge) || isValidHeadcount(headcount, findRoom)) {
                roomResponses.add(RoomResponse.of(findRoom, chargePerDay, totalCharge, isWish));
            }
        }
        return roomResponses;
    }

    private boolean isValidHeadcount(Integer headcount, Room findRoom) {
        return findRoom.getMaxCapacity() >= headcount;
    }

    private boolean isValidChargeRange(Integer minCharge, Integer maxCharge, int totalCharge) {
        if (maxCharge > DEFAULT_MAX_CHARGE) {
            return minCharge <= totalCharge;
        }
        return minCharge <= totalCharge && totalCharge <= maxCharge;
    }

    public int calculateChargePerDay(LocalDateTime checkIn, LocalDateTime checkOut, int totalCharge) {
        int betweenDays = DateUtils.getBetweenDays(checkIn, checkOut);
        return totalCharge / betweenDays;
    }

    public int calculateTotalCharge(List<ChargePolicyType> charges, LocalDateTime checkIn, LocalDateTime checkOut,
        Integer headcount, Room room) {
        return charges.stream()
            .map(cpt -> cpt.getChargePolicy().calculate(checkIn, checkOut, headcount, room))
            .mapToInt(Double::intValue)
            .sum();
    }
}
