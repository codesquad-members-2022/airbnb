package kr.codesquad.airbnb.service;

import kr.codesquad.airbnb.dto.RegionResponse;
import kr.codesquad.airbnb.repository.RegionRepository;
import kr.codesquad.airbnb.dto.EventResponseDto;
import kr.codesquad.airbnb.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MainService {

    private final RegionRepository regionRepository;
    private final EventRepository eventRepository;

    public List<RegionResponse> getNearRegions() {
        return regionRepository.findAll()
                .stream().map(RegionResponse::new)
                .collect(Collectors.toList());
    }

    public EventResponseDto getEvent() {
        EventResponseDto eventResponseDto = new EventResponseDto(
            eventRepository.findByMainEventIsTrue());
        System.out.println("eventResponseDto = " + eventResponseDto);

        return eventResponseDto;
    }
}
