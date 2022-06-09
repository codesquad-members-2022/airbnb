package com.codesquad.airbnb.core.room;

import com.codesquad.airbnb.core.charge.ChargeBill;
import com.codesquad.airbnb.core.common.embeddable.GuestGroup;
import com.codesquad.airbnb.core.common.embeddable.Location;
import com.codesquad.airbnb.core.common.embeddable.StayDate;
import com.codesquad.airbnb.core.room.domain.PriceRange;
import com.codesquad.airbnb.core.room.domain.Radius;
import com.codesquad.airbnb.core.room.dto.request.ChargeRequest;
import com.codesquad.airbnb.core.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.core.room.dto.request.RoomSearchRequest;
import com.codesquad.airbnb.core.room.dto.response.PriceRangeResponse;
import com.codesquad.airbnb.core.room.dto.response.RoomDetailResponse;
import com.codesquad.airbnb.core.room.dto.response.RoomSearchResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Room API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @ApiOperation(value = "숙소 목록 조회", notes = "입력한 값을 바탕으로 숙소의 목록을 조회한다.")
    @GetMapping
    public List<RoomSearchResponse> listRooms(@Valid RoomSearchRequest request) {
        return roomService.searchRooms(
            new RoomSearCondition(
                new Location(
                    request.getLongitude(),
                    request.getLatitude()
                ),
                new Radius(
                    request.getHorizontalRadius(),
                    request.getVerticalRadius()
                ),
                new GuestGroup(
                    request.getNumAdult(),
                    request.getNumChild(),
                    request.getNumInfant()
                ),
                new StayDate(
                    request.getCheckIn(),
                    request.getCheckOut()
                ),
                new PriceRange(
                    request.getMinPrice(),
                    request.getMaxPrice()
                )
            )
        );
    }

    @ApiOperation(value = "숙소 상세 조회", notes = "특정 숙소의 세부 사항을 조회한다.")
    @GetMapping("/{id}")
    public RoomDetailResponse showRoom(
        @ApiParam(value = "숙소의 Id", required = true)
        @PathVariable(name = "id") Integer id
    ) {
        return roomService.findRoom(id);
    }

    @ApiOperation(value = "숙소 요금 조회", notes = "숙소의 세부 요금 사항을 조회한다.")
    @GetMapping("/{id}/charge")
    public ChargeBill showCharge(
        @ApiParam(value = "숙소의 Id", required = true)
        @PathVariable("id") Integer id,
        @Valid ChargeRequest request
    ) {
        return roomService.showCharge(
            id,
            new StayDate(
                request.getCheckIn(),
                request.getCheckOut()
            ),
            new GuestGroup(
                request.getNumAdult(),
                request.getNumChild(),
                request.getNumInfant())
        );
    }

    @ApiOperation(value = "숙소 가격 범위 조회", notes = "숙소의 가격 범위를 조회한다.")
    @GetMapping("/prices")
    public PriceRangeResponse showPriceRange(
        @Valid RoomSearchRequest request,
        @RequestParam(value = "interval", defaultValue = "1000", required = false) Integer interval
    ) {
        return roomService.showPriceRange(
            new RoomSearCondition(
                new Location(
                    request.getLongitude(),
                    request.getLatitude()
                ),
                new Radius(
                    request.getHorizontalRadius(),
                    request.getVerticalRadius()
                ),
                new GuestGroup(
                    request.getNumAdult(),
                    request.getNumChild(),
                    request.getNumInfant()
                ),
                new StayDate(
                    request.getCheckIn(),
                    request.getCheckOut()
                )
            ),
            interval);
    }

}
