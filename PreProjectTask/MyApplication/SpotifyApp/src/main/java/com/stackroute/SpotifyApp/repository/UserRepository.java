package com.stackroute.SpotifyApp.repository;

import com.stackroute.SpotifyApp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
}
