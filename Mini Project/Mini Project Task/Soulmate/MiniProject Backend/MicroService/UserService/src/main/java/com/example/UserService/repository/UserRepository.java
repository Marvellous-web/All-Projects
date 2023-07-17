package com.example.UserService.repository;


import com.example.UserService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
    public abstract User findByEmailIdAndPassword(String id,String password);
}
