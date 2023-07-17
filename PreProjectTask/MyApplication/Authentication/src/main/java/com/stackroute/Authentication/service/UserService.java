package com.stackroute.Authentication.service;

import com.stackroute.Authentication.exception.UserAlreadyExistException;
import com.stackroute.Authentication.feignclient.SignUpData;
import com.stackroute.Authentication.model.User;

public interface UserService {
    public abstract User registerUser(User user)throws UserAlreadyExistException;
    public abstract User signUpUser(SignUpData signUpData);
    public abstract User loginCheck(String eId, String pwd);
}
