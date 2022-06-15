package com.ahoo.airbnb.reservation;

import com.ahoo.airbnb.exception.ErrorResponse;
import com.ahoo.airbnb.reservation.dtos.ReservationRequest;
import com.ahoo.airbnb.reservation.dtos.ReservationResponse;
import com.ahoo.airbnb.reservation.dtos.ReservationsResponse;
import com.ahoo.airbnb.reservation.dtos.RoomChargeRequest;
import com.ahoo.airbnb.reservation.dtos.RoomChargeResponse;
import com.ahoo.airbnb.utils.DateUtils;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "reservations", description = "예약 API")
@Slf4j
@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReservationController {

    // TODO: 서비스 개발 완료 후 mockReservationService 제거하기
    private final MockReservationService mockReservationService;
    private final ReservationService reservationService;

    @Operation(summary = "숙소 요금 조회",
        description = "해당 숙소의 요금을 조회합니다.",
        responses = {
            @ApiResponse(
                responseCode = "200",
                description = "숙소 요금 조회 성공",
                content = {
                    @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = RoomChargeResponse.class)
                    )
                }),
            @ApiResponse(
                responseCode = "400",
                description = "숙소 요금 조회 실패",
                content = {
                    @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = ErrorResponse.class)
                    )
                }
            )
        }
    )
    @PostMapping("/{roomId}/totalCharge")
    public ResponseEntity<RoomChargeResponse> totalChargeOf(
        @PathVariable Long roomId,
        @RequestBody RoomChargeRequest roomChargeRequest) {

        log.info("roomChargeRequest={}", roomChargeRequest);
        RoomChargeResponse responseBody = reservationService.calculateRoomCharge(roomId,
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckInDate()),
            DateUtils.stringToLocalDateTime(roomChargeRequest.getCheckOutDate()),
            roomChargeRequest.getHeadcount());
        return ResponseEntity.ok(responseBody);
    }

    @Operation(summary = "예약",
        description = "해당 숙소를 예약합니다.",
        responses = {
            @ApiResponse(
                responseCode = "200",
                description = "숙소 예약 성공")
        }
    )
    @PostMapping
    public ResponseEntity<Void> reserve(@RequestBody ReservationRequest reservationRequest) {
        log.info("reservationRequest={}", reservationRequest);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "예약 목록 조회",
        description = "로그인 유저의 예약 목록을 조회합니다.",
        responses = {
            @ApiResponse(
                responseCode = "200",
                description = "예약 목록 조회 성공",
                content = {
                    @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = ReservationsResponse.class)
                    )
                })
        }
    )
    @GetMapping
    public ResponseEntity<ReservationsResponse> reservations() {
        ReservationsResponse responseBody = mockReservationService.reservations();
        return ResponseEntity.ok(responseBody);
    }

    @Operation(summary = "예약 상세 조회",
        description = "예약 상세 내용을 조회합니다.",
        responses = {
            @ApiResponse(
                responseCode = "200",
                description = "예약 상세 조회 성공",
                content = {
                    @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = ReservationResponse.class)
                    )
                })
        }
    )
    @GetMapping("/{reservationId}")
    public ResponseEntity<ReservationResponse> reservation(@PathVariable Long reservationId) {
        ReservationResponse responseBody = mockReservationService.reservation(reservationId);
        return ResponseEntity.ok(responseBody);
    }
}
