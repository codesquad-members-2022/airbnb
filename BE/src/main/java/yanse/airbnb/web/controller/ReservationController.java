package yanse.airbnb.web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import yanse.airbnb.auth.annotation.AccessTokenHeader;
import yanse.airbnb.service.ReservationService;
import yanse.airbnb.web.dto.ResponseDto;
import yanse.airbnb.web.dto.reservation.RequestReservationDto;
import yanse.airbnb.web.dto.reservation.ReservationDetailDto;
import yanse.airbnb.web.dto.reservation.ReservationDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("reservation")
public class ReservationController {

    private final ReservationService reservationService;

    @GetMapping("my")
    public ResponseDto<List<ReservationDto>> reservationList(@RequestParam("memberId") Long memberId){
        return new ResponseDto<>(HttpStatus.OK, reservationService.findReservationList(memberId));
    }

    @GetMapping("my/{id}")
    public ReservationDetailDto reservationDetail(@PathVariable("id") Long id){
        return reservationService.findReservation(id);
    }

	@PostMapping("/{roomId}")
	public ResponseDto<String> reservation(
		@PathVariable("roomId") Long roomId,
		@RequestBody RequestReservationDto requestReservationDto,
		@AccessTokenHeader String jwtToken){

		reservationService.reservation(roomId, requestReservationDto, jwtToken);

		return new ResponseDto<>(HttpStatus.OK, "에약 성공!!");
	}
}
