package com.team14.cherrybnb.common.config;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.client.RootUriTemplateHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.persistence.EntityManager;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public JPAQueryFactory jpaQueryFactory(EntityManager entityManager) {
        return new JPAQueryFactory(entityManager);
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder()
                .uriTemplateHandler(new RootUriTemplateHandler("https://apis-navi.kakaomobility.com/v1"))
                .build();
    }

    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl("https://api.github.com")
                .build();

    }
}
