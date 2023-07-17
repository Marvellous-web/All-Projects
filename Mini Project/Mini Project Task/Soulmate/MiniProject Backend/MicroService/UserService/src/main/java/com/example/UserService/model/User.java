package com.example.UserService.model;

import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data @AllArgsConstructor@NoArgsConstructor@Entity
public class User {
    @Id
    private String emailId;
    private String password;
}
