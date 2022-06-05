package yanse.airbnb.domain.room;

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

    private static final long serialVersionUID = -1120806288L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRoom room = new QRoom("room");

    public final QAddress address;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final yanse.airbnb.domain.member.QMembers members;

    public final NumberPath<Integer> price = createNumber("price", Integer.class);

    public final NumberPath<Double> rating = createNumber("rating", Double.class);

    public final ListPath<yanse.airbnb.domain.reservation.Reservation, yanse.airbnb.domain.reservation.QReservation> reservationList = this.<yanse.airbnb.domain.reservation.Reservation, yanse.airbnb.domain.reservation.QReservation>createList("reservationList", yanse.airbnb.domain.reservation.Reservation.class, yanse.airbnb.domain.reservation.QReservation.class, PathInits.DIRECT2);

    public final NumberPath<Integer> reviewCount = createNumber("reviewCount", Integer.class);

    public final StringPath roomDescription = createString("roomDescription");

    public final ListPath<yanse.airbnb.domain.image.RoomImage, yanse.airbnb.domain.image.QRoomImage> roomImage = this.<yanse.airbnb.domain.image.RoomImage, yanse.airbnb.domain.image.QRoomImage>createList("roomImage", yanse.airbnb.domain.image.RoomImage.class, yanse.airbnb.domain.image.QRoomImage.class, PathInits.DIRECT2);

    public final QRoomInfo roomInfo;

    public final StringPath roomName = createString("roomName");

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
        this.address = inits.isInitialized("address") ? new QAddress(forProperty("address")) : null;
        this.members = inits.isInitialized("members") ? new yanse.airbnb.domain.member.QMembers(forProperty("members")) : null;
        this.roomInfo = inits.isInitialized("roomInfo") ? new QRoomInfo(forProperty("roomInfo")) : null;
    }

}

