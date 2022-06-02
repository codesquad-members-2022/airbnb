package com.team14.cherrybnb.room.application;

import com.team14.cherrybnb.room.domain.RoomRepository;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // TODO
    // 위치, 가격, 일정, 인원 수를 조건으로 해당하는 숙소 리스트 조회


    // TODO
    // 검색 지역 문자열을 기준으로 숙소 리스트 조회하기 (Elastic Search)


    /**
     * 특정 지점을 기준으로 일정 반경 내에 위치한 숙소 리스트 조회하기
     * @param circle
     */

    /**
     * 숙박 시설의 상세 정보 조회
     * @param roomId
     */
}
