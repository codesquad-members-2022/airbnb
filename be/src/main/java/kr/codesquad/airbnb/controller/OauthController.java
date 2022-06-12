package kr.codesquad.airbnb.controller;

import kr.codesquad.airbnb.service.OauthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileNotFoundException;

@RestController
@RequestMapping("oauth")
@RequiredArgsConstructor
public class OauthController {

    private final OauthService oauthService;

    @GetMapping("/callback")
    public String getCallback(String code) {
        return code;
    }

    @GetMapping("/webclient")
    public ResponseEntity<String> sendRequestToResourceServer(@RequestParam("authCode") String authCode) throws FileNotFoundException {
        return ResponseEntity.ok(oauthService.getJwtToken(authCode));
    }

}
