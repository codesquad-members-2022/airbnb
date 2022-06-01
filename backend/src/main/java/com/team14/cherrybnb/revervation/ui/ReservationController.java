package com.team14.cherrybnb.revervation.ui;

import com.team14.cherrybnb.revervation.dto.ReservationCardResponse;
import com.team14.cherrybnb.revervation.dto.ReservationDetailResponse;
import com.team14.cherrybnb.revervation.dto.ReservationRequest;
import com.team14.cherrybnb.room.dto.RoomDetailResponse;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    //예약하기
    //예약취소
    //예약 상세 조회
    //예약 리스트 조회

    @ApiOperation(
            value = "숙소 예약하기",
            notes = "예약을 요청하면 숙소를 예약한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @PostMapping()
    public ResponseEntity<Void> reserve(@RequestBody ReservationRequest reservationRequest) {
        // return Ok 또는 리다이렉트 url 넘겨주기
        return null;
    }

    @ApiOperation(
            value = "숙소 예약 취소하기",
            notes = "예약 정보를 삭제한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancel(@PathVariable Long id) {
        // return ok 또는 리다이렉트 url 넘겨주기
        return null;
    }

    @ApiOperation(
            value = "상세 예약 정보 조회하기",
            notes = "사용자의 상세 예약 정보를 조회한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @GetMapping("/{id}")
    public ResponseEntity<ReservationDetailResponse> getReservationDetail(@PathVariable Long id) {
        return ResponseEntity.ok(null);
    }

    @ApiOperation(
            value = "예약 목록 조회하기",
            notes = "사용자의 예약 목록을 조회한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @GetMapping()
    public ResponseEntity<List<ReservationCardResponse>> getReservations() {
        return null;
    }
}
