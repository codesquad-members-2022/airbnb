package com.team14.cherrybnb.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.team14.cherrybnb.auth.ui.AuthInterceptor;
import com.team14.cherrybnb.auth.ui.LoginFilter;
import io.netty.resolver.DefaultAddressResolverGroup;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.client.RootUriTemplateHandler;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import reactor.netty.http.client.HttpClient;

import javax.servlet.Filter;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final LoginFilter loginFilter;

    private final AuthInterceptor authInterceptor;

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder()
                .uriTemplateHandler(new RootUriTemplateHandler("https://apis-navi.kakaomobility.com/v1"))
                .build();
    }

    @Bean
    public HttpClient httpClient() {
        return HttpClient.create()
                .resolver(DefaultAddressResolverGroup.INSTANCE);
    }

    @Bean
    public WebClient webClient(HttpClient httpClient) {
        return WebClient.builder()
                .baseUrl("https://api.github.com")
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .build();

    }

    @Bean
    public FilterRegistrationBean<Filter> loginFilter() {
        FilterRegistrationBean<Filter> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(loginFilter);
        filterRegistrationBean.setOrder(1);
        filterRegistrationBean.addUrlPatterns("/*");
        return filterRegistrationBean;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns("/error");
    }

    @Bean
    public ObjectMapper jacksonBuilder() {
        Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder = new Jackson2ObjectMapperBuilder();
        jackson2ObjectMapperBuilder.propertyNamingStrategy(PropertyNamingStrategy.);
        return jackson2ObjectMapperBuilder.build();
    }
}
