package com.example.spring_mongo_demo;

import com.example.spring_mongo_demo.data.User;
import com.example.spring_mongo_demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class EPController {
    @Autowired
    private UserService userService;
    @GetMapping("/")
    public String welcome(){
        return "Hello Spring";
    }

    @GetMapping("/restricted")
    public Principal restricted(Principal principal) {
        return principal;
    }

    @GetMapping("/loggedin")
    public String loggedin() {
        return "Logged In";
    }

    @GetMapping ("/create_user")
    public String create(){
        String name = "test";
        String email = "test@email.com";
        User user = userService.save(new User(name, email));
        return "saved";
    }
}
