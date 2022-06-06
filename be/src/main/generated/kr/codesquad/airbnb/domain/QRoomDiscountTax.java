package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRoomDiscountTax is a Querydsl query type for RoomDiscountTax
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRoomDiscountTax extends EntityPathBase<RoomDiscountTax> {

    private static final long serialVersionUID = -1126014881L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRoomDiscountTax roomDiscountTax = new QRoomDiscountTax("roomDiscountTax");

    public final QDiscountTax discountTax;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QRoom room;

    public QRoomDiscountTax(String variable) {
        this(RoomDiscountTax.class, forVariable(variable), INITS);
    }

    public QRoomDiscountTax(Path<? extends RoomDiscountTax> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QRoomDiscountTax(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QRoomDiscountTax(PathMetadata metadata, PathInits inits) {
        this(RoomDiscountTax.class, metadata, inits);
    }

    public QRoomDiscountTax(Class<? extends RoomDiscountTax> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.discountTax = inits.isInitialized("discountTax") ? new QDiscountTax(forProperty("discountTax")) : null;
        this.room = inits.isInitialized("room") ? new QRoom(forProperty("room"), inits.get("room")) : null;
    }

}

