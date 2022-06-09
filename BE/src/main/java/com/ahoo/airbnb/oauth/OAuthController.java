package com.ahoo.airbnb.oauth;

import com.ahoo.airbnb.oauth.dtos.SignInResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OAuthController {

	private final OAuthService oAuthService;

	@GetMapping("/signin/oauth/{provider}")
	public ResponseEntity<SignInResponse> signIn(
		@PathVariable String provider,
		@RequestParam String code) {

		SignInResponse signInResponse = oAuthService.signIn(provider, code);
		return ResponseEntity.ok().body(signInResponse);
	}
}
