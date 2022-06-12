package yanse.airbnb.auth;

import io.netty.resolver.DefaultAddressResolverGroup;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;
import yanse.airbnb.auth.dto.AccessToken;
import yanse.airbnb.auth.dto.AccessTokenRequest;
import yanse.airbnb.auth.github.GithubUser;
import yanse.airbnb.domain.member.Members;


@Service
public class AuthService {

	@Value("${oauth2.user.github.client-id}")
	private String CLIENT_ID;

	@Value("${oauth2.user.github.client-secret}")
	private String CLIENT_SECRETS;

	@Value("${oauth2.user.github.redirect-uri}")
	private String REDIRECT_URI;

	@Value("${oauth2.provider.github.token-uri}")
	private String ACCESS_TOKEN_URI;

	@Value("${oauth2.provider.github.user-info-uri}")
	private String USER_URI;

	private final HttpClient httpClient = HttpClient.create()
		.resolver(DefaultAddressResolverGroup.INSTANCE);
	private final WebClient webClient = WebClient.builder()
		.clientConnector(new ReactorClientHttpConnector(httpClient)).build();

	//TODO: 예외처리 커스텀
	public AccessToken requestAccessToken(String code) {
		AccessTokenRequest accessTokenRequest = AccessTokenRequest.builder()
			.clientId(CLIENT_ID)
			.clientSecret(CLIENT_SECRETS)
			.code(code)
			.redirectUri(REDIRECT_URI)
			.build();
		return webClient.post()
			.uri(ACCESS_TOKEN_URI)
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(accessTokenRequest)
			.retrieve()
			.bodyToMono(AccessToken.class)
			.blockOptional()
			.orElseThrow(RuntimeException::new);
	}


	public Members requestUserInfo(AccessToken accessToken) {
		GithubUser githubUser = webClient.get()
			.uri(USER_URI)
			.accept(MediaType.APPLICATION_JSON)
			.header(HttpHeaders.AUTHORIZATION, accessToken.authorizationHeaderValue())
			.retrieve()
			.bodyToMono(GithubUser.class)
			.blockOptional()
			.orElseThrow(RuntimeException::new);
		return githubUser.toEntity(accessToken);
	}
}
