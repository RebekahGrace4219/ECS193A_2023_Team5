package com.example.spring_mongo_demo.service;

import com.example.spring_mongo_demo.data.User;
import com.example.spring_mongo_demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository UserRepo;

    public User save(User user){
        User tempUser = UserRepo.save(user);

        return tempUser;
    }
}
