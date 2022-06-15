package com.ahoo.airbnb.wish;

import com.ahoo.airbnb.entity.Member;
import com.ahoo.airbnb.entity.Wish;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishRepository extends JpaRepository<Wish, Long> {

    List<Wish> findAllByMember(Member member);
}
