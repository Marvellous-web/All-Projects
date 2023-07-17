package com.example.demo.service;

import com.example.demo.model.Interested;
import com.example.demo.model.Person;
import com.example.demo.repos.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PersonServiceImpl implements  PersonService{
    @Autowired
    private PersonRepository repository;

    @Override
    public Person saveUser(Person user) {
        return repository.save(user);
    }

    @Override
    public List<Person> getUser() {
        return repository.findAll();
    }

    @Override
    public List<Map<String, Interested>> getInterested(int id) {
        return repository.getLiked(id);
    }

    @Override
    public String liked(int userA, int userB) {
        repository.addInterest(userA, userB);
        return "Liked";
    }
}
