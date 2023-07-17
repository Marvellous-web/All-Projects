package com.stackroute.SpotifyApp.controller;

import com.stackroute.SpotifyApp.model.Song;
import com.stackroute.SpotifyApp.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/all-songs")
//@CrossOrigin
public class SongController {
    @Autowired
    private SongService songService;


    //http://localhost:3333/all-songs/get-all-songs
    @GetMapping("/get-all-songs")
    public ResponseEntity<?> getAllSong(){
        return new ResponseEntity<>(songService.getAllSongs(), HttpStatus.OK);
    }

    //http://localhost:3333/all-songs/add-song
    @PostMapping("/add-song")
    public ResponseEntity<?> addSong(@RequestBody Song song){
        return new ResponseEntity<>(songService.addSong(song),HttpStatus.OK);
    }
}
