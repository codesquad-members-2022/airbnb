package com.codesquad.airbnb.tag;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Integer> {

    List<Tag> findByDisplayTrueOrderBySequence();

}
