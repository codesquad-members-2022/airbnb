package com.codesquad.airbnb.config;

import com.codesquad.airbnb.charge.discount.DiscountPolicy;
import com.codesquad.airbnb.charge.discount.WeeklyDiscountPolicy;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import javax.persistence.EntityManager;
import org.locationtech.jts.io.WKTReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CustomConfig {

    @Bean
    public JPAQueryFactory jpaQueryFactory(EntityManager em) {
        return new JPAQueryFactory(em);
    }

    @Bean
    public WKTReader wktReader() {
        return new WKTReader();
    }

    @Bean
    public List<DiscountPolicy> discountPolicies() {
        return List.of(new WeeklyDiscountPolicy());
    }

}
