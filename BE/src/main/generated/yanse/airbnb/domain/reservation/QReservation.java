package yanse.airbnb.domain.reservation;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReservation is a Querydsl query type for Reservation
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReservation extends EntityPathBase<Reservation> {

    private static final long serialVersionUID = -527444660L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReservation reservation = new QReservation("reservation");

    public final NumberPath<Integer> adultCount = createNumber("adultCount", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> checkInDateTime = createDateTime("checkInDateTime", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> checkOutDateTime = createDateTime("checkOutDateTime", java.time.LocalDateTime.class);

    public final NumberPath<Integer> childCount = createNumber("childCount", Integer.class);

    public final QDetailFee detailFee;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> infantCount = createNumber("infantCount", Integer.class);

    public final yanse.airbnb.domain.member.QMembers members;

    public final NumberPath<Integer> reservationPrice = createNumber("reservationPrice", Integer.class);

    public final yanse.airbnb.domain.room.QRoom room;

    public QReservation(String variable) {
        this(Reservation.class, forVariable(variable), INITS);
    }

    public QReservation(Path<? extends Reservation> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReservation(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReservation(PathMetadata metadata, PathInits inits) {
        this(Reservation.class, metadata, inits);
    }

    public QReservation(Class<? extends Reservation> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.detailFee = inits.isInitialized("detailFee") ? new QDetailFee(forProperty("detailFee")) : null;
        this.members = inits.isInitialized("members") ? new yanse.airbnb.domain.member.QMembers(forProperty("members")) : null;
        this.room = inits.isInitialized("room") ? new yanse.airbnb.domain.room.QRoom(forProperty("room"), inits.get("room")) : null;
    }

}

