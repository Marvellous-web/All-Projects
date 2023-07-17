package com.example.demo.service;

import com.example.demo.model.Interested;
import com.example.demo.model.Person;

import java.util.List;
import java.util.Map;

public interface PersonService {
//    public abstract Person savePerson(Person person);
    Person saveUser(Person user);

    List<Person> getUser();

    List<Map<String, Interested>> getInterested(int id);

    String liked(int userA, int userB);
}
