package com.ahoo.airbnb.reservation.dtos;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class RoomChargeResponse {

	private int chargePerDay;
	private int totalCharge;
	private ChargesResponse chargesResponse;

	public static RoomChargeResponse of(int chargePerDay, int totalCharge, ChargesResponse chargesResponse) {
		return new RoomChargeResponse(chargePerDay, totalCharge, chargesResponse);
	}
}
