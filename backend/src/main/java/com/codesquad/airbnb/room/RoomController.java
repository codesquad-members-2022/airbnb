package com.codesquad.airbnb.room;

import com.codesquad.airbnb.charge.ChargeBill;
import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.room.dto.request.ChargeRequest;
import com.codesquad.airbnb.room.dto.request.RoomSearCondition;
import com.codesquad.airbnb.room.dto.request.RoomSearCondition.PriceRange;
import com.codesquad.airbnb.room.dto.request.RoomSearCondition.Radius;
import com.codesquad.airbnb.room.dto.request.RoomSearchRequest;
import com.codesquad.airbnb.room.dto.response.RoomDetailResponse;
import com.codesquad.airbnb.room.dto.response.RoomSearchResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    public List<RoomSearchResponse> listRooms(RoomSearchRequest request) {
        return roomService.searchRooms(new RoomSearCondition(
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
                new PriceRange(
                    request.getMinPrice(),
                    request.getMaxPrice()
                ),
                new StayDate(
                    request.getCheckIn(),
                    request.getCheckOut()
                )
            )
        );
    }

    @GetMapping("/{id}")
    public RoomDetailResponse showRoom(@PathVariable(name = "id") Integer roomId) {
        return roomService.findRoom(roomId);
    }

    @GetMapping("/{id}/charge")
    public ChargeBill showCharge(@PathVariable("id") Integer roomId, ChargeRequest request
    ) {
        return roomService.showCharge(
            roomId,
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

}
