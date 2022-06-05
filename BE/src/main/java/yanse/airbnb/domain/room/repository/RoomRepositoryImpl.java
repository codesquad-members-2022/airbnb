package yanse.airbnb.domain.room.repository;

import static yanse.airbnb.domain.image.QRoomImage.*;
import static yanse.airbnb.domain.reservation.QReservation.*;
import static yanse.airbnb.domain.room.QRoom.*;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.StringExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import yanse.airbnb.domain.image.QRoomImage;
import yanse.airbnb.domain.room.Room;
import yanse.airbnb.web.dto.RequestRoomSearchDto;

public class RoomRepositoryImpl implements RoomRepositoryCustom {

	private final JPAQueryFactory query;

	public RoomRepositoryImpl(EntityManager em) {
		this.query = new JPAQueryFactory(em);
	}

	@Override
	public List<String> findByAddress(String address) {
		return query
			.select(getAddressConcat())
			.from(room)
			.where(getAddressContains(address))
			.fetch();
	}

	@Override
	public List<Room> findRoomList(RequestRoomSearchDto dto) {
		return query
			.select(room)
			.from(room)
			.leftJoin(room.reservationList, reservation)
			.join(room.roomImage, roomImage).fetchJoin()
			.where(getAddressContains(dto.getAddress()),
				validCheckInOutTime(dto.getCheckIn(), dto.getCheckOut()),
				validPrice(dto.getMinPrice(), dto.getMaxPrice()),
				validGuestCount(dto.checkInGuest())
			)
			.fetch().stream().distinct().collect(Collectors.toList());
	}

	private BooleanExpression validGuestCount(int guest) {
		return room.roomInfo.maxGuest.goe(guest);
	}

	private BooleanExpression validPrice(int minPrice, int maxPrice) {
		return room.price.between(minPrice, maxPrice);
	}

	private BooleanExpression validCheckInOutTime(LocalDate checkIn, LocalDate checkOut) {
		return room.reservationList.isEmpty()
			.or(reservation.checkOutDateTime.loe(checkIn.atStartOfDay())
				.or(reservation.checkInDateTime.goe(checkOut.atStartOfDay())));
	}

	private BooleanExpression getAddressContains(String address) {
		return room.address.city.contains(address).or(
			room.address.region.contains(address).or(
				room.address.district.contains(address).or(
					room.address.detail.contains(address))));
	}

	private StringExpression getAddressConcat() {
		return room.address.city.concat(" ")
			.concat(room.address.region.concat(" ")
				.concat(room.address.district.concat(" ")
					.concat(room.address.detail)));
	}
}
