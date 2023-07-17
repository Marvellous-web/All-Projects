package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;

@AllArgsConstructor@NoArgsConstructor@Data @Node
public class Person {
    @Id
    String emailId;
    String name,age,gender,city;

}
