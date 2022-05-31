package com.codesquad.airbnb.wish;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WishRepository extends JpaRepository<Wish, Integer>, WishRepositoryCustom {

}
