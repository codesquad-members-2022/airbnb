package yanse.airbnb.domain.member;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMembers is a Querydsl query type for Members
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMembers extends EntityPathBase<Members> {

    private static final long serialVersionUID = -8962397L;

    public static final QMembers members = new QMembers("members");

    public final StringPath email = createString("email");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath membersImage = createString("membersImage");

    public final StringPath membersName = createString("membersName");

    public final ListPath<yanse.airbnb.domain.reservation.Reservation, yanse.airbnb.domain.reservation.QReservation> reservationList = this.<yanse.airbnb.domain.reservation.Reservation, yanse.airbnb.domain.reservation.QReservation>createList("reservationList", yanse.airbnb.domain.reservation.Reservation.class, yanse.airbnb.domain.reservation.QReservation.class, PathInits.DIRECT2);

    public final ListPath<yanse.airbnb.domain.wish.Wish, yanse.airbnb.domain.wish.QWish> wishList = this.<yanse.airbnb.domain.wish.Wish, yanse.airbnb.domain.wish.QWish>createList("wishList", yanse.airbnb.domain.wish.Wish.class, yanse.airbnb.domain.wish.QWish.class, PathInits.DIRECT2);

    public QMembers(String variable) {
        super(Members.class, forVariable(variable));
    }

    public QMembers(Path<? extends Members> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMembers(PathMetadata metadata) {
        super(Members.class, metadata);
    }

}

