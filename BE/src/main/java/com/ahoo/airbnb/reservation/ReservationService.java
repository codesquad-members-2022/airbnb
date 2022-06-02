package com.ahoo.airbnb.reservation;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.exception.ExceptionMessage;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.ahoo.airbnb.reservation.dtos.ChargesResponse;
import com.ahoo.airbnb.reservation.dtos.RoomChargeRequest;
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

    public RoomChargeResponse calculateTotalChargeOf(Long roomId, RoomChargeRequest roomChargeRequest) {

        Room room =
            roomRepository.findById(roomId).orElseThrow(() -> new NoSuchElementException(ExceptionMessage.NO_ROOM_ID));
        List<ChargePolicyType> roomChargePolicies =
            roomRepository.findActiveChargePolicyTypeById(roomId);

        LocalDateTime checkIn =
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckInDate());
        LocalDateTime checkOut =
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckOutDate());
        int headcount = roomChargeRequest.getHeadcount();

        ChargesResponse charges = new ChargesResponse();
        for (ChargePolicyType roomChargePolicy : roomChargePolicies) {
            int calculatedCharge =
                (int) roomChargePolicy.getChargePolicy().calculate(checkIn, checkOut, headcount, room);
            charges.put(roomChargePolicy.getDisplayName(), calculatedCharge);
        }

        int totalCharge = charges.getCharges().values().stream()
            .mapToInt(Integer::intValue)
            .sum();

        int betweenDays = DateUtils.getBetweenDays(checkIn, checkOut);
        int chargePerDay = totalCharge / betweenDays;

        return RoomChargeResponse.of(chargePerDay, totalCharge, charges);
    }
}
