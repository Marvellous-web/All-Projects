package com.stackroute.SpotifyApp;

import com.stackroute.SpotifyApp.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class SpotifyAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpotifyAppApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean jwtFilter(){
		FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/user-song-app/get-login-user-details",
				"/user-song-app/add-song-to-login-user");
		return filterRegistrationBean;
	}

	@Bean
	public FilterRegistrationBean registrationBean(){
		final CorsConfiguration corsConfiguration=new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.addAllowedOrigin("http://localhost:4200");
		corsConfiguration.addAllowedHeader("*");
		corsConfiguration.addAllowedMethod("*");
		final UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**",corsConfiguration);
		FilterRegistrationBean frb=new FilterRegistrationBean(new CorsFilter(source));
		frb.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return frb;
	}

}
