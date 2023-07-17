package com.example.SoulMateService.repository;

import com.example.SoulMateService.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface soulmateRepository extends MongoRepository<User,String> {


}
