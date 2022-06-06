package com.ahoo.airbnb.reservation;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.exception.ExceptionMessage;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.ahoo.airbnb.reservation.dtos.ChargesResponse;
import com.ahoo.airbnb.reservation.dtos.RoomChargeResponse;
import com.ahoo.airbnb.room.RoomRepository;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final RoomRepository roomRepository;

    public RoomChargeResponse calculateRoomCharge(Long roomId, LocalDateTime checkIn, LocalDateTime checkOut, Integer headcount) {
        Room room =
            roomRepository.findById(roomId).orElseThrow(() -> new NoSuchElementException(ExceptionMessage.NO_ROOM_ID));
        List<ChargePolicyType> roomChargePolicies =
            roomRepository.findActiveChargePolicyTypeById(roomId);

        ChargesResponse charges = getChargesResponse(room, roomChargePolicies, checkIn, checkOut, headcount);
        int totalCharge = calculateTotalCharge(charges);
        int chargePerDay = calculateChargePerDay(checkIn, checkOut, totalCharge);

        return RoomChargeResponse.of(chargePerDay, totalCharge, charges);
    }

    private int calculateChargePerDay(LocalDateTime checkIn, LocalDateTime checkOut, int totalCharge) {
        int betweenDays = DateUtils.getBetweenDays(checkIn, checkOut);
        return totalCharge / betweenDays;
    }

    private int calculateTotalCharge(ChargesResponse charges) {
        return charges.getCharges().values().stream()
            .mapToInt(Integer::intValue)
            .sum();
    }

    private ChargesResponse getChargesResponse(Room room, List<ChargePolicyType> roomChargePolicies,
        LocalDateTime checkIn, LocalDateTime checkOut, int headcount) {
        ChargesResponse charges = new ChargesResponse();

        for (ChargePolicyType roomChargePolicy : roomChargePolicies) {
            int calculatedCharge =
                (int) roomChargePolicy.getChargePolicy().calculate(checkIn, checkOut, headcount, room);
            charges.put(roomChargePolicy.getDisplayName(), calculatedCharge);
        }

        return charges;
    }
}
