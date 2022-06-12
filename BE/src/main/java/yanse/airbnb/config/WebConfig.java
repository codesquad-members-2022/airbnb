package yanse.airbnb.config;

import io.netty.resolver.DefaultAddressResolverGroup;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import reactor.netty.http.client.HttpClient;
import yanse.airbnb.auth.annotation.AccessTokenResolver;
import yanse.airbnb.auth.jwt.JwtInterceptor;

@RequiredArgsConstructor
@Configuration
public class WebConfig implements WebMvcConfigurer {
	private final JwtInterceptor jwtInterceptor;
	private final AccessTokenResolver accessTokenResolver;

	@Bean
	public HttpClient httpClient() {
		return HttpClient.create()
			.resolver(DefaultAddressResolverGroup.INSTANCE);
	}

	@Bean
	public WebClient webClient(HttpClient httpClient) {
		return WebClient.builder()
			.clientConnector(new ReactorClientHttpConnector(httpClient))
			.build();
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(jwtInterceptor).addPathPatterns("/api/**");
	}

	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
		resolvers.add(accessTokenResolver);
	}
}
