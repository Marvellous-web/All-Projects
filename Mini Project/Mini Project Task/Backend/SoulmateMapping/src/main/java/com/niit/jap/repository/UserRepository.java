package com.niit.jap.repository;

import com.niit.jap.domain.Interested;
import com.niit.jap.domain.User;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserRepository extends Neo4jRepository<User, Long> {
    @Query("MATCH (user:USER) - [:INTERESTED] -> (userB:USER) WHERE ID(user) = $id RETURN userB")
    /*This query is asking for all users who are interested in a particular user, identified by the given ID. It will return the profiles of the users who have expressed an interest in the given user.*/
    List<Map<String, Interested>>getLiked(int id);

    @Query("MATCH (userA:USER), (userB:USER) WHERE ID(userA) = $userA AND ID(userB) = $userB CREATE (userA) - [:INTERESTED] -> (userB)")
    /*This query creates a relationship between two nodes, labeled with USER, where the first node is identified by the parameter $userA, and the second node is identified by the parameter $userB. The relationship created is labeled INTERESTED.*/
    void addInterest(int userA, int userB);

}
