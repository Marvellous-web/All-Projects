package com.stackroute.Authentication.service;

import com.stackroute.Authentication.model.User;

import java.util.Map;

public interface JWTTokenGenerator {
    public abstract Map<String,String> generateJwt(User user);
}
