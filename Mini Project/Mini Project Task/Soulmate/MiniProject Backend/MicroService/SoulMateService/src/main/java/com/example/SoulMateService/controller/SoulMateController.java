package com.example.SoulMateService.controller;

import com.example.SoulMateService.RabbitMQ.CommonUser;
import com.example.SoulMateService.model.User;
import com.example.SoulMateService.service.soulmateService;
import com.mongodb.internal.connection.CommandMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/soul-mate") @CrossOrigin
public class SoulMateController {
    @Autowired
    private soulmateService soulService;
    //http://localhost:8081/soul-mate/getUser
    @GetMapping("/getUser")
    public ResponseEntity<?> getUser(){
        return new ResponseEntity<>(soulService.getUser(), HttpStatus.OK);

    }

//    //http://localhost:8081/soul-mate/addUser
//    @PostMapping("/addUser")
//    public ResponseEntity<?> addUser(@RequestBody User user)
//    {
//        return new ResponseEntity<>(soulService.addUser(user),HttpStatus.OK);
//    }
    //http://localhost:8081/soul-mate/signUpUser
    @PostMapping("/signUpUser")
    public ResponseEntity<?> signUpUser(@RequestBody CommonUser commonUser)
    {
        return new ResponseEntity<>(soulService.signUpUser(commonUser),HttpStatus.OK);
    }
    @GetMapping("/findbyid/{emailId}")
    public ResponseEntity<?> findbyid(@PathVariable String emailId){
        return new ResponseEntity<>(soulService.findById(emailId),HttpStatus.OK);
    }

}
