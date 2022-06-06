package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDiscountTax is a Querydsl query type for DiscountTax
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDiscountTax extends EntityPathBase<DiscountTax> {

    private static final long serialVersionUID = -1413150662L;

    public static final QDiscountTax discountTax = new QDiscountTax("discountTax");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> rate = createNumber("rate", Integer.class);

    public final ListPath<RoomDiscountTax, QRoomDiscountTax> roomDiscountTax = this.<RoomDiscountTax, QRoomDiscountTax>createList("roomDiscountTax", RoomDiscountTax.class, QRoomDiscountTax.class, PathInits.DIRECT2);

    public QDiscountTax(String variable) {
        super(DiscountTax.class, forVariable(variable));
    }

    public QDiscountTax(Path<? extends DiscountTax> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDiscountTax(PathMetadata metadata) {
        super(DiscountTax.class, metadata);
    }

}

