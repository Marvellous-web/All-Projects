package com.example.UserService.service;


import com.example.UserService.model.User;

public interface UserService {
    public abstract User registerUser(User loginUser);
    public abstract User loginUser(String email,String password);
}
