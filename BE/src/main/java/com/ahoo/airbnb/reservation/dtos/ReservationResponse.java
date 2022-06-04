package com.ahoo.airbnb.reservation.dtos;

import com.ahoo.airbnb.entity.Address;
import com.ahoo.airbnb.member.MemberResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReservationResponse {

	private Long reservationID;
	private Integer headCount;
	private Integer totalCharge;
	private String roomName;
	private String roomType;
	private String mainImageUrl;
	private String checkInDate;
	private String checkOutDate;
	private Address address;
	private MemberResponse host;
}
