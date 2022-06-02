package com.codesquad.airbnb.room;

import com.codesquad.airbnb.common.embeddable.GuestGroup;
import com.codesquad.airbnb.common.embeddable.Location;
import com.codesquad.airbnb.common.embeddable.StayDate;
import com.codesquad.airbnb.room.dto.RoomDetailResponse;
import com.codesquad.airbnb.room.dto.RoomSearCondition;
import com.codesquad.airbnb.room.dto.RoomSearCondition.PriceRange;
import com.codesquad.airbnb.room.dto.RoomSearCondition.Radius;
import com.codesquad.airbnb.room.dto.RoomSearchResponse;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    public List<RoomSearchResponse> listRooms(
        @RequestParam(value = "longitude") Double longitude,
        @RequestParam(value = "latitude") Double latitude,
        @RequestParam(value = "horizontal") Double horizontalRadius,
        @RequestParam(value = "vertical") Double verticalRadius,
        @RequestParam(value = "checkIn", required = false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkInDate,
        @RequestParam(value = "checkOut", required = false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOutDate,
        @RequestParam(value = "minPrice", required = false) Integer minPrice,
        @RequestParam(value = "maxPrice", required = false) Integer maxPrice,
        @RequestParam(value = "numAdult", required = false) Integer numAdult,
        @RequestParam(value = "numChild", required = false) Integer numChild,
        @RequestParam(value = "numInfant", required = false) Integer numInfant
    ) {
        return roomService.searchRooms(new RoomSearCondition(
                new Location(longitude, latitude),
                new Radius(horizontalRadius, verticalRadius),
                new GuestGroup(numAdult, numChild, numInfant),
                new PriceRange(minPrice, maxPrice),
            new StayDate(checkInDate, checkOutDate)
            )
        );
    }

    @GetMapping("/{id}")
    public RoomDetailResponse showRoom(@PathVariable(name = "id") Integer roomId) {
        return roomService.findRoom(roomId);
    }

}
