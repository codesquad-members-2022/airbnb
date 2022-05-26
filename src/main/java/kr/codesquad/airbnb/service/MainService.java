package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.EventResponseDto;
import kr.codesquad.airbnb.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MainService {

    private final EventRepository eventRepository;

    public EventResponseDto getEvent() {
        EventResponseDto eventResponseDto = new EventResponseDto(
            eventRepository.findByMainEventIsTrue());
        System.out.println("eventResponseDto = " + eventResponseDto);

        return eventResponseDto;
    }
}
