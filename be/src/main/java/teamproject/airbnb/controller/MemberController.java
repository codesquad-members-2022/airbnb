package teamproject.airbnb.controller;

import javax.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import teamproject.airbnb.domain.Member;
import teamproject.airbnb.service.MemberService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/join")
	public CreateMemberResponse saveMemberV1(@RequestBody @Valid Member member) {
		Long id = memberService.join(member);
		return new CreateMemberResponse(id);
	}

	// TODO
//	@PutMapping("/{id}")
//	public UpdateMemberResponse updateMemberV2(
//		@PathVariable("id")
//		@RequestBody @Valid Member member) {
//
//	}

	@Data
	@AllArgsConstructor
	static class UpdateMemberResponse {

		private Long id;
	}

	@Data
	static class CreateMemberResponse {

		private Long id;

		public CreateMemberResponse(Long id) {
			this.id = id;
		}
	}
}
