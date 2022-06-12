package yanse.airbnb.web.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import yanse.airbnb.service.MainService;
import yanse.airbnb.web.dto.image.ImageDto;

import yanse.airbnb.web.dto.ResponseDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("main")
public class MainController {

	private final MainService mainService;

	@GetMapping
	public ResponseDto<List<ImageDto>> mainImageType(@RequestParam("type") String imageType) {
		return new ResponseDto<>(HttpStatus.OK, mainService.findAllByImage(imageType));
	}
}
