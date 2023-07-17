package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.repos.PersonRepository;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/person")
@CrossOrigin
public class PersonController {
    @Autowired
    private PersonService service;

    //http://localhost:8084/person/post
    @PostMapping("/post")
    public ResponseEntity<?> save(@RequestBody Person user) {
        return new ResponseEntity<>(service.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/find")
    public ResponseEntity<?> get() {
        return new ResponseEntity<>(service.getUser(), HttpStatus.OK);
    }

    @GetMapping("/interested/{id}")
    public ResponseEntity<?> getLiked(@PathVariable int id) {
        return new ResponseEntity<>(service.getInterested(id), HttpStatus.OK);
    }

    @PostMapping("/like")
    public ResponseEntity<?> like(@RequestBody List<Integer> values) {
        return new ResponseEntity<>(service.liked(values.get(0), values.get(1)), HttpStatus.OK);
    }
}
