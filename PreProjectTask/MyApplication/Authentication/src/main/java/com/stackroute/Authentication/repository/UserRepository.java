package com.stackroute.Authentication.repository;

import com.stackroute.Authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
    public abstract User findByEmailIdAndPassword(String eId, String pwd);
}
