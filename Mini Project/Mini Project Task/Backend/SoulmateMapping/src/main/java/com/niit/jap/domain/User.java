package com.niit.jap.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.*;

import java.util.List;


@Node("USER")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id @GeneratedValue private Long id;
    private String email;
    private String name;
    private long age;
    private String gender;
    private String city;

    @Relationship(type = "INTERESTED", direction = Relationship.Direction.OUTGOING)
    private List<Interested> interested;

    @Relationship(type = "NOT_INTERESTED", direction = Relationship.Direction.OUTGOING)
    private List<NotInterested> notInterested;
//let's say that the User node represents a person named Amit, and the Interested node represents a Girl Divya that Amit is interested in relationship. The "@Relationship" annotation on the "interested" field tells Neo4j to create a relationship between Amit and Divya, with the type "INTERESTED" and the direction of the relationship as OUTGOING. This means that Amit is the starting point of the relationship and is interested in relationship the Divya.
}
