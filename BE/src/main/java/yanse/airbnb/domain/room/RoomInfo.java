package yanse.airbnb.domain.room;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.*;
import yanse.airbnb.type.RoomType;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
@Getter
public class RoomInfo {

	@Enumerated(EnumType.STRING)
	private RoomType roomType;

	private int maxGuest;

	private int bedCount;

	private int bathroomCount;

	private int checkInTime;

	private int checkOutTime;
}
