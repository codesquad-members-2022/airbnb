package yanse.airbnb.web.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import yanse.airbnb.service.SearchService;
import yanse.airbnb.web.dto.RequestRoomSearchDto;
import yanse.airbnb.web.dto.ResponseDto;
import yanse.airbnb.web.dto.ResponseRoomDto;
import yanse.airbnb.web.dto.RoomDto;

@RequestMapping("/search")
@RequiredArgsConstructor
@RestController
@Slf4j
public class SearchController {

	private final SearchService searchService;

	@GetMapping
	public ResponseDto<String> searchAddress(@RequestParam String address) {
		return new ResponseDto<>(searchService.findAddress(address));
	}

	@GetMapping("/room/{id}")
	public RoomDto searchRoomDetail(@PathVariable("id") Long id){
		return searchService.findRoomDetail(id);
	}
	@GetMapping("/room_list")
	public ResponseDto<ResponseRoomDto> searchRoomList(RequestRoomSearchDto dto) {
		log.info("result ={}", dto);
		return new ResponseDto<>();
	}
}
