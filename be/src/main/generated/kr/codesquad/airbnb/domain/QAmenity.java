package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAmenity is a Querydsl query type for Amenity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAmenity extends EntityPathBase<Amenity> {

    private static final long serialVersionUID = 272736329L;

    public static final QAmenity amenity = new QAmenity("amenity");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final ListPath<RoomAmenity, QRoomAmenity> roomAmenities = this.<RoomAmenity, QRoomAmenity>createList("roomAmenities", RoomAmenity.class, QRoomAmenity.class, PathInits.DIRECT2);

    public QAmenity(String variable) {
        super(Amenity.class, forVariable(variable));
    }

    public QAmenity(Path<? extends Amenity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAmenity(PathMetadata metadata) {
        super(Amenity.class, metadata);
    }

}

