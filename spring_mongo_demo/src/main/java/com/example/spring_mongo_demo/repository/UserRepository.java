package com.example.spring_mongo_demo.repository;

import com.example.spring_mongo_demo.data.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    long count();

}
