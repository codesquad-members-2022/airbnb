package com.codesquad.airbnb.config;

import com.codesquad.airbnb.auth.interceptor.AuthenticationInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final HandlerInterceptor authenticationInterceptor;

    public WebConfig(AuthenticationInterceptor authenticationInterceptor) {
        this.authenticationInterceptor = authenticationInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authenticationInterceptor)
                .order(1)
                .addPathPatterns("/**")
                .excludePathPatterns("/error/**", "/css/**", "/login/**", "/swagger-ui/**", "/v3/api-docs/**", "/swagger-resources/**", "/webjars/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("*");
    }
}
