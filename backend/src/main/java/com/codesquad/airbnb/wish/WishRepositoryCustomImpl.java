package com.codesquad.airbnb.wish;

import static com.codesquad.airbnb.member.QMember.member;
import static com.codesquad.airbnb.member.QWish.wish;
import static com.codesquad.airbnb.room.entity.QRoom.room;

import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class WishRepositoryCustomImpl implements WishRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public List<Wish> findByMemberId(Integer memberId) {
        return queryFactory.selectFrom(wish)
            .join(wish.room, room)
            .fetchJoin()
            .join(wish.member, member)
            .fetchJoin()
            .where(member.id.eq(memberId))
            .fetch();
    }

}
