package com.codesquad.airbnb.core.tag;

import com.codesquad.airbnb.core.tag.entity.Tag;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Integer> {

    List<Tag> findByDisplayTrueOrderBySequence();

}
