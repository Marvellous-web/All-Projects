package com.stackroute.SpotifyApp.controller;

import com.stackroute.SpotifyApp.model.Song;
import com.stackroute.SpotifyApp.model.User;
import com.stackroute.SpotifyApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
@RequestMapping("/user-song-app")
//@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    //http://localhost:3333/user-song-app/add-user
    @PostMapping("/add-user")
    public ResponseEntity<?> addUser(@RequestBody User user){
        user.setSongs(new ArrayList<>());
        return new ResponseEntity<>(userService.addUser(user), HttpStatus.OK);
    }

    //http://localhost:3333/user-song-app/get-login-user-details
    @GetMapping("/get-login-user-details")
    public ResponseEntity<?> getLoginUser(HttpServletRequest httpServletRequest){
        String current_user_emailid=(String)httpServletRequest.getAttribute("curr_user_emailid");
        System.out.println(current_user_emailid);
        return new ResponseEntity<>(userService.getUserById(current_user_emailid),HttpStatus.OK);
    }

    //http://localhost:3333/user-song-app/add-song-to-login-user
    @PostMapping("/add-song-to-login-user")
    public ResponseEntity<?> addSongToPlaylist(@RequestBody Song song,HttpServletRequest request){
        String current_user_emailid=(String)request.getAttribute("curr_user_emailid");
        System.out.println(current_user_emailid);
        return new ResponseEntity<>(userService.addSongByEmailId(song,current_user_emailid),HttpStatus.OK);
    }
}
