package yanse.airbnb.domain.room;

import javax.persistence.Embeddable;

@Embeddable
public class RoomInfo {

	private RoomType roomType;
	private int maxGuest;
	private int bedCount;
	private int bathroomCount;
	private int checkInTime;
	private int checkOutTime;
}
