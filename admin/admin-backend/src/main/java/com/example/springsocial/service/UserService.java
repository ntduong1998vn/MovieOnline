package com.example.springsocial.service;


import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository repository;

    @Override
    public Optional<User> findById(long id) {
        return repository.findById(id);
    }


}
