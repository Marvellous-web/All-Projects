package com.stackroute.Authentication.service;

import com.stackroute.Authentication.exception.UserAlreadyExistException;
import com.stackroute.Authentication.feignclient.SignUpData;
import com.stackroute.Authentication.feignclient.UserDto;
import com.stackroute.Authentication.feignclient.UserProxy;
import com.stackroute.Authentication.model.User;
import com.stackroute.Authentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserProxy userProxy;
    @Override
    public User registerUser(User user)throws UserAlreadyExistException {
        if (userRepository.findById(user.getEmailId()).isPresent()){
            throw new UserAlreadyExistException();
        }
       else

        return userRepository.save(user);
    }

    @Override
    public User signUpUser(SignUpData signUpData) {
        UserDto userDto=new UserDto(signUpData.getEmailId(),signUpData.getName(),signUpData.getMobileNo());
        ResponseEntity re=userProxy.sendUserDtoToProductApp(userDto);
        System.out.println(re);
        User user=new User(signUpData.getEmailId(),signUpData.getPassword(),"ROLE_USER");
        return userRepository.save(user);
    }

    @Override
    public User loginCheck(String eId, String pwd) {

        return userRepository.findByEmailIdAndPassword(eId,pwd);
    }
}
