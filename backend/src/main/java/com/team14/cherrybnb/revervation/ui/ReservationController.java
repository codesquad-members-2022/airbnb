package com.team14.cherrybnb.revervation.ui;

import com.team14.cherrybnb.auth.domain.Member;
import com.team14.cherrybnb.revervation.application.ReservationService;
import com.team14.cherrybnb.revervation.dto.ReservationCardResponse;
import com.team14.cherrybnb.revervation.dto.ReservationDetailResponse;
import com.team14.cherrybnb.revervation.dto.ReservationRequest;
import com.team14.cherrybnb.room.dto.RoomDetailResponse;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @ApiOperation(
            value = "숙소 예약하기",
            notes = "예약을 요청하면 숙소를 예약한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @PostMapping()
    public ResponseEntity<Void> reserve(Member loginMember, @RequestBody ReservationRequest reservationRequest) {
        reservationService.bookRoom(loginMember, reservationRequest);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // TODO 리다이렉트?!
    @ApiOperation(
            value = "숙소 예약 취소하기",
            notes = "예약 정보를 삭제한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancel(Member loginMember, @PathVariable("id") Long reservationId) {
        reservationService.cancelReservation(loginMember, reservationId);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(
            value = "상세 예약 정보 조회하기",
            notes = "사용자의 상세 예약 정보를 조회한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @GetMapping("/{id}")
    public ResponseEntity<ReservationDetailResponse> getReservationDetail(@PathVariable("id") Long reservationId) {
        return ResponseEntity.ok(reservationService.showReservationDetail(reservationId));
    }

    @ApiOperation(
            value = "예약 목록 조회하기",
            notes = "사용자의 예약 목록을 조회한다.",
            produces = "application/json",
            response = RoomDetailResponse.class
    )
    @GetMapping()
    public ResponseEntity<Page<ReservationCardResponse>> getReservations(Pageable pageable, Member loginMember) {
        return ResponseEntity.ok(reservationService.searchReservations(pageable, loginMember));
    }
}
