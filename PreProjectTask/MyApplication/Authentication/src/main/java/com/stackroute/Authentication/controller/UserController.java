package com.stackroute.Authentication.controller;

import com.stackroute.Authentication.exception.UserAlreadyExistException;
import com.stackroute.Authentication.feignclient.SignUpData;
import com.stackroute.Authentication.model.User;
import com.stackroute.Authentication.service.JWTTokenGenerator;
import com.stackroute.Authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication-app")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JWTTokenGenerator jwtTokenGenerator;

    //http://localhost:4444/authentication-app/register-user
    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistException {
        user.setRole("ROLE_USER");
        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.OK);
    }

    //http://localhost:4444/authentication-app/signup-user
    @PostMapping("/signup-user")
    public ResponseEntity<?> signupUser(@RequestBody SignUpData signUpData){
        return new ResponseEntity<>(userService.signUpUser(signUpData),HttpStatus.OK);
    }

    //http://localhost:4444/authentication-app/check-login
    @PostMapping("/check-login")
    private ResponseEntity<?> loginUser(@RequestBody User user){
        User result=userService.loginCheck(user.getEmailId(), user.getPassword());
        System.out.println("Hi "+result);
        if (result!=null){
            result.setPassword("");
//            return new ResponseEntity<>(result,HttpStatus.OK);
            return new ResponseEntity<>(jwtTokenGenerator.generateJwt(result),HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Login failed",HttpStatus.OK);
        }
    }
}
