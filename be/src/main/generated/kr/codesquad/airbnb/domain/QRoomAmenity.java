package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRoomAmenity is a Querydsl query type for RoomAmenity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRoomAmenity extends EntityPathBase<RoomAmenity> {

    private static final long serialVersionUID = -1204628754L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRoomAmenity roomAmenity = new QRoomAmenity("roomAmenity");

    public final QAmenity amenity;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QRoom room;

    public QRoomAmenity(String variable) {
        this(RoomAmenity.class, forVariable(variable), INITS);
    }

    public QRoomAmenity(Path<? extends RoomAmenity> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QRoomAmenity(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QRoomAmenity(PathMetadata metadata, PathInits inits) {
        this(RoomAmenity.class, metadata, inits);
    }

    public QRoomAmenity(Class<? extends RoomAmenity> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.amenity = inits.isInitialized("amenity") ? new QAmenity(forProperty("amenity")) : null;
        this.room = inits.isInitialized("room") ? new QRoom(forProperty("room"), inits.get("room")) : null;
    }

}

