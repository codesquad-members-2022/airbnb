package yanse.airbnb.web.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import yanse.airbnb.service.SearchService;
import yanse.airbnb.web.dto.room.RequestRoomSearchDto;
import yanse.airbnb.web.dto.ResponseDto;
import yanse.airbnb.web.dto.room.ResponseRoomDto;
import yanse.airbnb.web.dto.room.RoomDetailDto;

@RequestMapping("/search")
@RequiredArgsConstructor
@RestController
public class SearchController {

	private final SearchService searchService;

	@GetMapping
	public ResponseDto<List<String>> searchAddress(@RequestParam String address) {
		return new ResponseDto<>(HttpStatus.OK, searchService.findAddress(address));
	}

	@GetMapping("/room/{id}")
	public ResponseDto<RoomDetailDto> searchRoomDetail(@PathVariable("id") Long id){
		return new ResponseDto<>(HttpStatus.OK, searchService.findRoomDetail(id));
	}

	@GetMapping("/rooms")
	public ResponseDto<List<ResponseRoomDto>> searchRoomList(RequestRoomSearchDto dto) {
		return new ResponseDto<>(HttpStatus.OK, searchService.findCardRoomList(dto));
	}
}
