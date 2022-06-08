package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRoom is a Querydsl query type for Room
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRoom extends EntityPathBase<Room> {

    private static final long serialVersionUID = 565664075L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRoom room = new QRoom("room");

    public final NumberPath<Double> bathroom = createNumber("bathroom", Double.class);

    public final NumberPath<Double> bed = createNumber("bed", Double.class);

    public final NumberPath<Double> bedroom = createNumber("bedroom", Double.class);

    public final ListPath<Booking, QBooking> bookings = this.<Booking, QBooking>createList("bookings", Booking.class, QBooking.class, PathInits.DIRECT2);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath image = createString("image");

    public final QLocation location;

    public final NumberPath<Integer> maxNumberOfGuest = createNumber("maxNumberOfGuest", Integer.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> pricePerNight = createNumber("pricePerNight", Integer.class);

    public final ListPath<RoomAmenity, QRoomAmenity> roomAmenities = this.<RoomAmenity, QRoomAmenity>createList("roomAmenities", RoomAmenity.class, QRoomAmenity.class, PathInits.DIRECT2);

    public final ListPath<RoomDiscountTax, QRoomDiscountTax> roomDiscountTaxes = this.<RoomDiscountTax, QRoomDiscountTax>createList("roomDiscountTaxes", RoomDiscountTax.class, QRoomDiscountTax.class, PathInits.DIRECT2);

    public QRoom(String variable) {
        this(Room.class, forVariable(variable), INITS);
    }

    public QRoom(Path<? extends Room> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QRoom(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QRoom(PathMetadata metadata, PathInits inits) {
        this(Room.class, metadata, inits);
    }

    public QRoom(Class<? extends Room> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.location = inits.isInitialized("location") ? new QLocation(forProperty("location")) : null;
    }

}

