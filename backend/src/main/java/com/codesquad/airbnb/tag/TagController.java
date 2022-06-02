package com.codesquad.airbnb.tag;

import com.codesquad.airbnb.tag.dto.TagResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "tags API")
@RestController
@RequestMapping("/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    @ApiOperation(value = "태그 목록 조회", notes = "등록된 모든 태그를 조회한다.")
    @GetMapping
    public List<TagResponse> getTags() {
        return tagService.showTags();
    }

}
