package yanse.airbnb.web.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import yanse.airbnb.service.SearchService;
import yanse.airbnb.web.dto.ResponseSearchAddressDto;

@RequestMapping("/search")
@RequiredArgsConstructor
@RestController
public class SearchController {

	private final SearchService searchService;

	@GetMapping
	public List<ResponseSearchAddressDto> searchAddress(@RequestParam String address) {
		return searchService.findAddress(address);
	}
}
