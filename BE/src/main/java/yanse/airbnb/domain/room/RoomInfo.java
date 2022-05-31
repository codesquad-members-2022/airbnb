package yanse.airbnb.domain.room;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import yanse.airbnb.type.RoomType;

@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class RoomInfo {

	@Enumerated(EnumType.STRING)
	private RoomType roomType;
	private int maxGuest;
	private int bedCount;
	private int bathroomCount;
	private int checkInTime;
	private int checkOutTime;
}
