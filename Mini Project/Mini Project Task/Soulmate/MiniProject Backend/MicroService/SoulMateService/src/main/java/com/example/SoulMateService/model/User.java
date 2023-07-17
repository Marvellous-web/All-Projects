package com.example.SoulMateService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data@Document@NoArgsConstructor@AllArgsConstructor
public class User {
    @Id
    String emailId;
    String name,age,gender,city,image,password;

}
