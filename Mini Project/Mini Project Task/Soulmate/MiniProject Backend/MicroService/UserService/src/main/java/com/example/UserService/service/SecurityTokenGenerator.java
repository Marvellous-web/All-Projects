package com.example.UserService.service;



import com.example.UserService.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    public abstract Map<String,String> generateToken(User user);


}
