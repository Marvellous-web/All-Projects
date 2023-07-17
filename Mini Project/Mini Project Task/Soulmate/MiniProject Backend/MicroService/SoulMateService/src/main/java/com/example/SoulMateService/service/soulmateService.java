package com.example.SoulMateService.service;

import com.example.SoulMateService.RabbitMQ.CommonUser;
import com.example.SoulMateService.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface soulmateService {
    public abstract User addUser(User user);
    public abstract List<User>  getUser();
    public abstract User signUpUser(CommonUser commonUser);
    public abstract User findById(String id);

}
