package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.dto.EventResponseDto;
import kr.codesquad.airbnb.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MainController {

    private final MainService mainService;

    @GetMapping("/main/event")
    public EventResponseDto getEvent() {
        EventResponseDto event = mainService.getEvent();
        System.out.println("event = " + event);
        return event;
    }

}
