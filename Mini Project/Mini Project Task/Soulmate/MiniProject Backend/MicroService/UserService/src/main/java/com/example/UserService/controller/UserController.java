package com.example.UserService.controller;

import com.example.UserService.model.User;
import com.example.UserService.service.SecurityTokenGenerator;
import com.example.UserService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController@RequestMapping("/loginUser") @CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/addUser")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        return  new ResponseEntity<>(userService.registerUser(user), HttpStatus.OK);

    }
    //http://localhost:8082/loginUser/checkUser
    @GetMapping("/checkUser")
    public ResponseEntity<?> checkUser(@RequestBody User user)
    {
       User user1= userService.loginUser(user.getEmailId(), user.getPassword());
       if(user1!=null)
       {
           return new ResponseEntity<>(user1,HttpStatus.OK);
       }
       else return new ResponseEntity<>("Login Faied",HttpStatus.OK);
    }

    @Autowired
    private SecurityTokenGenerator securityTokenGenerator;
    @PostMapping("/authenticate")
    public ResponseEntity<?> loginCheck1(@RequestBody User user)
    {
        User result=userService.loginUser(user.getEmailId(),user.getPassword());
        if(result!=null)
        {
//            Map<String,String> key=securityTokenGenerator.generateToken(result);
            return new ResponseEntity<>(securityTokenGenerator.generateToken(result),HttpStatus.OK);
        }
        else return new ResponseEntity<>("Authentication Failed",HttpStatus.NOT_FOUND);
    }
}
