package com.stackroute.Authentication.feignclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "song-app",url = "localhost:3333")
public interface UserProxy {
    @PostMapping("/user-song-app/add-user")
    public abstract ResponseEntity<?> sendUserDtoToProductApp(@RequestBody UserDto userDto);
}
