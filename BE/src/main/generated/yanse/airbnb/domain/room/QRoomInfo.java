package yanse.airbnb.domain.room;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QRoomInfo is a Querydsl query type for RoomInfo
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QRoomInfo extends BeanPath<RoomInfo> {

    private static final long serialVersionUID = -1023280322L;

    public static final QRoomInfo roomInfo = new QRoomInfo("roomInfo");

    public final NumberPath<Integer> bathroomCount = createNumber("bathroomCount", Integer.class);

    public final NumberPath<Integer> bedCount = createNumber("bedCount", Integer.class);

    public final NumberPath<Integer> checkInTime = createNumber("checkInTime", Integer.class);

    public final NumberPath<Integer> checkOutTime = createNumber("checkOutTime", Integer.class);

    public final NumberPath<Integer> maxGuest = createNumber("maxGuest", Integer.class);

    public final EnumPath<yanse.airbnb.type.RoomType> roomType = createEnum("roomType", yanse.airbnb.type.RoomType.class);

    public QRoomInfo(String variable) {
        super(RoomInfo.class, forVariable(variable));
    }

    public QRoomInfo(Path<? extends RoomInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRoomInfo(PathMetadata metadata) {
        super(RoomInfo.class, metadata);
    }

}

