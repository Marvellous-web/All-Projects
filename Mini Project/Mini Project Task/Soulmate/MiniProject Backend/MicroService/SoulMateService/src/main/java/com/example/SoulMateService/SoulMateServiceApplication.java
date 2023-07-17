package com.example.SoulMateService;

import com.example.SoulMateService.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SoulMateServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoulMateServiceApplication.class, args);
	}
//	@Bean
//	public FilterRegistrationBean jwtFilter(){
//		FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean();
//		filterRegistrationBean.setFilter(new JwtFilter());
////		filterRegistrationBean.addUrlPatterns("/soul-mate/getUser");
//		return filterRegistrationBean;
//
//	}

}
