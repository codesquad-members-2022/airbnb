package kr.codesquad.airbnb.configuration;

import javax.servlet.Filter;
import kr.codesquad.airbnb.filter.LoginValidateFilter;
import kr.codesquad.airbnb.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RequiredArgsConstructor
@Configuration
public class FilterConfig implements WebMvcConfigurer {

    private final TokenProvider tokenProvider;

    @Bean
    public FilterRegistrationBean<Filter> loginValidateFilter() {
        LoginValidateFilter loginValidateFilter = new LoginValidateFilter(tokenProvider);
        return new FilterRegistrationBean<>(loginValidateFilter);
    }
}
