package com.ahoo.airbnb.reservation;

import com.ahoo.airbnb.entity.Room;
import com.ahoo.airbnb.entity.RoomChargePolicy;
import com.ahoo.airbnb.reservation.chargepolicy.ChargePolicyType;
import com.ahoo.airbnb.reservation.dtos.ChargesResponse;
import com.ahoo.airbnb.reservation.dtos.RoomChargeRequest;
import com.ahoo.airbnb.reservation.dtos.RoomChargeResponse;
import com.ahoo.airbnb.room.RoomRepository;
import com.ahoo.airbnb.utils.DateUtils;
import java.time.LocalDateTime;
import java.util.NoSuchElementException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final RoomRepository roomRepository;

    public RoomChargeResponse calculateTotalChargeOf(Long roomId,
        RoomChargeRequest roomChargeRequest) {
        Room room = roomRepository.findById(roomId).orElseThrow(NoSuchElementException::new);

        LocalDateTime checkIn =
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckInDate());
        LocalDateTime checkOut =
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckOutDate());
        int headcount = roomChargeRequest.getHeadcount();

        ChargesResponse charges = calculateCharges(room, checkIn, checkOut, headcount);

        int totalCharge = charges.getCharges().values().stream()
            .mapToInt(Integer::intValue)
            .sum();

        int betweenDays = DateUtils.getBetweenDays(checkIn, checkOut);
        int chargePerDay = totalCharge / betweenDays;

        return RoomChargeResponse.of(chargePerDay, totalCharge, charges);
    }

    private ChargesResponse calculateCharges(Room room,
        LocalDateTime checkIn, LocalDateTime checkOut, int headcount) {
        ChargesResponse charges = new ChargesResponse();

        for (RoomChargePolicy roomChargePolicy : room.getRoomChargePolicies()) {
            ChargePolicyType chargePolicy = roomChargePolicy.getChargePolicy()
                .getChargePolicyType();
            int calculatedCharge = (int) chargePolicy.getChargePolicy()
                .calculate(checkIn, checkOut, headcount, room);
            charges.put(chargePolicy.getPolicyName(), calculatedCharge);
        }

        return charges;
    }
}
