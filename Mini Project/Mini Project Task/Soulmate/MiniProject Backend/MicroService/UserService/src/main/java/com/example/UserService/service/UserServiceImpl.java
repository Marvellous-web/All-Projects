package com.example.UserService.service;

import com.example.UserService.model.User;
import com.example.UserService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public User registerUser(User loginUser) {
        return userRepository.save(loginUser);
    }

    @Override
    public User loginUser(String email, String password) {

        return userRepository.findByEmailIdAndPassword(email,password);
    }
}
