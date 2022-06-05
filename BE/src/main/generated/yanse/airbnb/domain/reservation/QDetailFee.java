package yanse.airbnb.domain.reservation;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDetailFee is a Querydsl query type for DetailFee
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QDetailFee extends BeanPath<DetailFee> {

    private static final long serialVersionUID = -1869234443L;

    public static final QDetailFee detailFee = new QDetailFee("detailFee");

    public final NumberPath<Double> cleaningFee = createNumber("cleaningFee", Double.class);

    public final EnumPath<yanse.airbnb.type.DiscountPolicy> discountPolicy = createEnum("discountPolicy", yanse.airbnb.type.DiscountPolicy.class);

    public final NumberPath<Double> roomTax = createNumber("roomTax", Double.class);

    public final NumberPath<Double> serviceTax = createNumber("serviceTax", Double.class);

    public QDetailFee(String variable) {
        super(DetailFee.class, forVariable(variable));
    }

    public QDetailFee(Path<? extends DetailFee> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDetailFee(PathMetadata metadata) {
        super(DetailFee.class, metadata);
    }

}

