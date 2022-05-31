package yanse.airbnb.web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import yanse.airbnb.service.MainService;
import yanse.airbnb.web.dto.ImageListDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("main")
public class MainController {
    private final MainService mainService;

    @GetMapping
    public List<ImageListDto> mainImageType(@RequestParam("type") String imageType){
        return mainService.findAllByImage(imageType);
    }
}
