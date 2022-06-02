package com.codesquad.airbnb.core.tag;

import com.codesquad.airbnb.core.tag.dto.TagResponse;
import com.codesquad.airbnb.core.tag.entity.Tag;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public List<TagResponse> showTags() {
        List<Tag> tags = tagRepository.findByDisplayTrueOrderBySequence();

        return tags.stream()
            .map(TagResponse::new)
            .collect(Collectors.toList());
    }

}
