package com.codesquad.airbnb.wish;

import java.util.List;

public interface WishRepositoryCustom {

    List<Wish> findByMemberId(Integer memberId);

}
