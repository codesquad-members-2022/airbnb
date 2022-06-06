package kr.codesquad.airbnb.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QGuest is a Querydsl query type for Guest
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QGuest extends BeanPath<Guest> {

    private static final long serialVersionUID = 345727848L;

    public static final QGuest guest = new QGuest("guest");

    public final NumberPath<Integer> adults = createNumber("adults", Integer.class);

    public final NumberPath<Integer> children = createNumber("children", Integer.class);

    public final NumberPath<Integer> infants = createNumber("infants", Integer.class);

    public QGuest(String variable) {
        super(Guest.class, forVariable(variable));
    }

    public QGuest(Path<? extends Guest> path) {
        super(path.getType(), path.getMetadata());
    }

    public QGuest(PathMetadata metadata) {
        super(Guest.class, metadata);
    }

}

